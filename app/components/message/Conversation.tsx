// SomeComponent.js
import React, { useEffect, useCallback, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
} from "react-native-gifted-chat";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

import axios from "axios";
import TokenService from "../../services/TokenService";

const ConversationScreen = () => {
  const router = useRouter();
  const { user_id, name, phone, img } = useLocalSearchParams();

  const [messages, setMessages] = useState([]);

  const axiosInstance = axios.create({
    baseURL: "http://asms.com/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenService.getToken()}`,
    },
  });
  useEffect(() => {
    axiosInstance
      .get(`http://asms.com/api/messages/${user_id}`)
      .then((response) => {
        const loadedMessages = response.data.map((message) => ({
          _id: message.id,
          text: message.content,
          createdAt: new Date(message.created_at),
          user: {
            _id: message.sender_id,
            name: message.sender_id === user_id ? name : "Other User",
            avatar: img,
          },
        }));
        setMessages(loadedMessages.reverse());
      })
      .catch((error) => console.error(error));
  }, [user_id]);

  const onSend = useCallback(
    (newMessages = []) => {
      const newMessage = newMessages[0];
      const messageData = {
        sender_id: 99,
        receiver_id: user_id,
        content: newMessage.text,
      };
      console.log(messageData);

      axios
        .post("http://asms.com/api/messages", messageData)
        .then((response) => {
          console.log(1);
          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessage)
          );
        })
        .catch((error) => console.log(2));
      // console.error(error));
    },
    [user_id]
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color={Colors.black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{name}</Text>
        </View>
        <View style={[styles.headerRight, { alignItems: "flex-end" }]}>
          <TouchableOpacity>
            <Feather color="#000" name="more-vertical" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.chatContainer}>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 99,
            name: "",
            avatar: "",
          }}
          renderBubble={(props) => (
            <Bubble
              {...props}
              wrapperStyle={{
                left: { backgroundColor: "#f0f0f0" },
                right: { backgroundColor: "#007aff" },
              }}
              textStyle={{
                left: { color: "#000" },
                right: { color: "#fff" },
              }}
            />
          )}
          renderInputToolbar={(props) => (
            <InputToolbar {...props} containerStyle={styles.inputToolbar} />
          )}
          renderSend={(props) => (
            <Send {...props} containerStyle={styles.sendButton}>
              <Feather name="send" size={24} color="#fff" />
            </Send>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  headerRight: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  chatContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  inputToolbar: {
    backgroundColor: "#fff",
    paddingTop: -5,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 20,
    paddingVertical: 10,
    backgroundColor: Colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ConversationScreen;
