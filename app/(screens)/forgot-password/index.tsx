import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import Colors from "../../constants/Colors"; 

export default function ForgotPassword() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.languageSwitcher}>
        <Image source={require('../../../assets/images/vietnam_flag.png')} style={styles.flagIcon} />
      </TouchableOpacity>

      <Image source={require('../../../assets/images/question.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Bạn gặp sự cố khi đăng nhập?</Text>
        <Text style={styles.subtitle}>
          Đừng lo lắng, hãy nhập số điện thoại của bạn để yêu cầu khôi phục lại mật khẩu
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
          keyboardType="phone-pad"
          style={styles.inputControl}
          placeholder="Nhập số điện thoại"
          placeholderTextColor="#6b7280"
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Yêu cầu OTP</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.formFooter}>Quay lại đăng nhập</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  languageSwitcher: {
    padding: 20,
    margin: 20,
    position: 'absolute',
    top: 10,
    right: 20,
  },
  flagIcon: {
    width: 30,
    height: 20,
  },
  image: {
    width: 500,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6b7280',
  },
  inputContainer: {
    width: '100%',
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
    marginBottom: 20,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    backgroundColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f00',
    textAlign: 'center',
    marginTop: 20,
  },
});
