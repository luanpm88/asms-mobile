import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { GiftedChat, Bubble, InputToolbar, Send } from 'react-native-gifted-chat';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const ConversationScreen = () => {

    const router = useRouter();
  const { name, phone, img } = useLocalSearchParams(); 
  
  const messagesContent = [
    {
      _id: 1,
      text: 'Sed efficitur varius dignissim.',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: img,
      },
    },
    {
      _id: 2,
      text: '[x] Lorem ipsum\ndolor sit amet',
      createdAt: new Date(),
      user: {
        _id: 1,
      },
    },
    {
      _id: 3,
      text: 'Vivamus cursus nisi sit amet risus cursus fringilla.',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: img,
      },
    },  
    {
      _id: 4,
      text: '[x] Lorem ipsum',
      createdAt: new Date(),
      user: {
        _id: 1,
      },
    },
    {
      _id: 5,
      text: 'Aliquam erat volutpat.',
      createdAt: new Date(),
      user: {
        _id: 1,
      },
    },  
  ];

  

  const [messages, setMessages] = useState(messagesContent);

  useEffect(() => {
    setMessages(messagesContent);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color={Colors.black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{name}</Text>
        </View>
        
        <View style={[styles.headerRight, { alignItems: 'flex-end' }]}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <Feather color="#000" name="more-vertical" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.chatContainer}>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1, // Dummy user ID
            name: name || '',
            avatar: img ,
          }}
          renderBubble={(props) => (
            <Bubble
              {...props}
              wrapperStyle={{
                left: {
                  backgroundColor: '#f0f0f0',
                },
                right: {
                  backgroundColor: '#007aff',
                },
              }}
              textStyle={{
                left: {
                  color: '#000',
                },
                right: {
                  color: '#fff',
                },
              }}
            />
          )}
          renderInputToolbar={(props) => (
            <InputToolbar
              {...props}
              containerStyle={styles.inputToolbar}
            />
          )}
          renderSend={(props) => (
            <Send
              {...props}
              containerStyle={styles.sendButton}
            >
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
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
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
    backgroundColor: '#fff',
    // borderTopWidth: 1,
    // borderTopColor: '#ddd',
    paddingTop: -5,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 20,
    paddingVertical: 10,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConversationScreen;
