import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from "../../constants/Colors"; 
import { TextInput } from 'react-native-gesture-handler'
import { router } from 'expo-router';

export default function SignUp() {
  return (
    <View style={{
      padding: 25,
      paddingTop: 80,
      backgroundColor:Colors.white,
      height:'100%',
    }}>
      <Text style={{
        fontSize: 31,
        fontWeight: "700",
        color: "#1D2A32",
        marginBottom: 6,
        marginTop: 20,
      }}>Tạo tài khoản</Text>

      {/* {Full name} */}
      <View style={{
        marginTop: 50,
      }}>
        <Text style={styles.inputLabel}>Họ và Tên</Text>
        <TextInput
          style={styles.inputControl}
          placeholder='Enter Full Name' />
      </View>

      {/* {Email} */}
      <View style={{
        marginTop: 20,
      }}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.inputControl}
          placeholder='Enter Email' />
      </View>

      {/* { Password} */}
      <View style={{
        marginTop: 20,
      }}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.inputControl}
          placeholder='Enter Password'/>
      </View>

      {/* { Đăng ký Button } */}
      <View style={styles.formAction}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.formFooter}>Quay lại đăng nhập</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  formAction: {
    marginTop: 20,
    marginBottom: 16,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f00',
    textAlign: 'center',
    marginTop: 20,
  },

  title: {
    fontSize: 31,
    fontWeight: "700",
    color: "#1D2A32",
    marginBottom: 6,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    borderWidth: 1,
    borderColor: "#C9D3DB",
    borderStyle: "solid",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#075eec",
    borderColor: "#075eec",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
})