import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Định dạng email không hợp lệ!")
      .required("Vui lòng nhập email!"),
    password: Yup.string()
      .min(6, "Mật khẩu quá ngắn!")
      .required("Vui lòng nhập mật khẩu!"),
  });

  const handleLogin = async (values: any) => {
    console.log(values); 
    try {
      const test = process.env.EXPO_PUBLIC_HOST_NAME;
      console.log(test);
      const response = await fetch(`http://${process.env.EXPO_PUBLIC_HOST_NAME}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          rememberMe: values.rememberMe,
        }),
      });

      const text = await response.text();

      try {
        const data = JSON.parse(text);
        if (response.ok) {
          await AsyncStorage.setItem("userToken", data.token); 
          Alert.alert("Đăng nhập thành công");
          console.log(data.user.name);
          router.push({
            pathname: "/home",
            params: {
              name: data.user.name,
            },
          });
         
        } else {
          if (data.errors && data.errors.email) {
            Alert.alert("Đăng nhập thất bại!", data.errors.email);
          } else {
            Alert.alert("Đăng nhập thất bại!", "An error occurred during login.");
          }
        }
      } catch (jsonError) {
        console.error("JSON Parse Error:", jsonError);
        Alert.alert("Đăng nhập thất bại!", "An unexpected error occurred.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      Alert.alert("Đăng nhập thất bại!", "An unexpected error occurred.");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={require("../assets/images/logo.png")}
            />

            <Text style={styles.title}>
              Đăng nhập vào <Text style={{ color: "#075eec" }}>ASMS</Text>
            </Text>

            {/* <Text style={styles.subtitle}>
              Get access to your portfolio and more
            </Text> */}
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>E-mail</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Mật khẩu</Text>
              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity onPress={() => handleSubmit} style={styles.btn}>
                <Text style={styles.btnText}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.formLink}>Quên mật khẩu?</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle link
            }}
            style={{ marginTop: "auto" }}
          >
            <Text style={styles.formFooter}>
              Bạn chưa có tài khoản?{" "}
              <Text style={{ textDecorationLine: "underline" }}>Đăng ký</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: "700",
    color: "#1D2A32",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 36,
  },
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: "600",
    color: "#075eec",
    textAlign: "center",
  },
  formFooter: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
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
  errorText: {
    color: "red",
    fontSize: 13,
    marginTop: 4,
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
});
