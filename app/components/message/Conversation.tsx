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


import MessageServiceImpl from '@/app/services/impl/MessageServiceImpl';
import AuthServiceImpl from '@/app/services/impl/AuthServiceImpl';
import MessageDTO from '@/app/dto/MessageDTO';


const ConversationScreen = () => {
  const router = useRouter();
  const { user_id, name, phone, img } = useLocalSearchParams();

  const [messages, setMessages] = useState([]);
  const [messagedUsers, setMessagedUsers] = useState<MessageDTO[]>([]);

  const [currentUserId, setCurrentUserId] = useState<number>(0);

  
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const authService = new AuthServiceImpl();
        const user = await authService.loadUser();
        setCurrentUserId(user.id);
        // console.log('Ok :', user);
      } catch (error) {
        console.error('Failed :', error);
      }
    };

    fetchCurrentUser();
  }, []);

  const getMessagedUsers = async () => {
      try {
          const messageService = new MessageServiceImpl();
          const users = await messageService.fetchMessages(user_id);
          setMessagedUsers(users);
          const loadedMessages = users.map((message) => ({
              _id: message.id,
              text: message.content,
              createdAt: message.created_at,
              user: {
                  _id: message.sender_id,
                  name: message.sender_id === currentUserId ? name : "Other User",
                  avatar: img,
              },
          }));
          setMessages(loadedMessages); 
      } catch (error) {
          console.error('Failed fetch:', error);
      }
  };

  useEffect(() => {
      getMessagedUsers();
    // const fetchMessagesInterval = setInterval(() => {
    //   getMessagedUsers();
    // }, 3000); 
   
    // return () => clearInterval(fetchMessagesInterval);
}, [user_id, currentUserId]); 

  const onSend = useCallback(
    (newMessages = []) => {
        const newMessage = newMessages[0];
        const messageData = {
          sender_id: currentUserId, 
          receiver_id: user_id,    
          content: newMessage.text,
      };
        const messageService = new MessageServiceImpl();
        messageService.sendMessage(messageData)
            .then(() => {
                setMessages((previousMessages) =>
                    GiftedChat.append(previousMessages, newMessage)
                );
            })
            .catch((error) => {
                console.error('Error sending message:', error);
            });
    },
    [user_id, currentUserId]
);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color={Colors.black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{name} {user_id}</Text>
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
            _id: currentUserId,
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
