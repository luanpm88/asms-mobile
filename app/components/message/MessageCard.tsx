import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";

const MessageCard = ({ user }) => {
  const router = useRouter();

  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "/(screens)/message",
            params: {
              user_id: user.id,
              name: user.name,
              img: user.avatarUrl,
            },
          });
        }}
      >
        <View style={styles.card}>
          <Image
            alt=""
            resizeMode="cover"
            source={
              user.avatarUrl
                ? { uri: user.avatarUrl }
                : require("../../../assets/images/blank.png")
            }
            style={styles.cardImg}
          />

          <View style={styles.cardBody}>
            <Text>ID: {user.id}</Text>
            <Text style={styles.cardTitle}>{user.name}</Text>
            <Text style={styles.cardPhone}>{user.phone}</Text>
          </View>

          <View style={styles.cardAction}>
            <Feather color={Colors.gray} name="chevron-right" size={22} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: Colors.divider,
  },
  card: {
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardImg: {
    width: 42,
    height: 42,
    borderRadius: 12,
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

export default MessageCard;
