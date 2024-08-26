import React, { useEffect, useState } from "react";
import Colors from "../constants/Colors";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import UserMessageServiceImpl from "@/app/services/impl/UserMessageServiceImpl";
import UserMessageUrlsManager from "@/app/api/UserMessageUrlsManager";

import UserMessageDTO from "@/app/dto/UserMessageDTO";
import MessageCard from "../components/message/MessageCard";

export default function MessageScreen() {
  const router = useRouter();

  const [messagedUsers, setMessagedUsers] = useState<UserMessageDTO[]>([]);

  const getMessagedUsers = async () => {
    const userMessageService = new UserMessageServiceImpl();

    const users = await userMessageService.fetchUserMessages();
    setMessagedUsers(users);
  };

  useEffect(() => {
    getMessagedUsers();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <Text style={styles.headerTitle}>Message</Text>
        </View> */}

        <ScrollView contentContainerStyle={styles.messageContent}>
        {messagedUsers.length ? (
            messagedUsers.map((user, index) => (
              <MessageCard key={index} user={user} />
            ))
          ) : (
            <Text>No results</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  headerTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#000",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "center",
  },
  messageContent: {
    paddingLeft: 24,
  },
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: Colors.divider,
  },
  cardImg: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },
  cardAvatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.bgColor,
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: "bold",
    color: Colors.bgColor,
  },
  cardBody: {
    marginRight: "auto",
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.black,
  },
  cardPhone: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "400",
    color: Colors.black,
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },
});
