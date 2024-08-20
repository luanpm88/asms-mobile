import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";
import ApiUrls from "@/app/entities/api/ApiUrls";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/app/utils/redux/reducer/features/auth/authSlice";
import { useRouter } from "expo-router";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const handleEmailChange = (text: string) => setEmail(text);
    const handlePasswordChange = (text: string) => setPassword(text);
    const handleLogin = async () => {
        try {
            const response = await axios.post(ApiUrls.getLoginUrl(), {
                email, password
            });

            if (response.data.status === 200) {
                setToken(response.data.token);
            } else {
                Alert.alert("Đăng nhập thất bại!");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Đăng nhập thất bại!");
        }
    }

    useEffect(() => {
        if (token) {
            dispatch(loginSuccess(token));
            setIsLoggedIn(true);
        }
    }, [token]);

    useEffect(() => {
        if (isLoggedIn) {
            router.replace('/(tabs)/home');
        }
    }, [isLoggedIn])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                alt="App Logo"
                resizeMode="contain"
                style={styles.headerImg}
                source={require("../../../assets/images/logo.png")}
                />
                <Text style={styles.title}>
                Đăng nhập vào <Text style={{ color: "#075eec" }}>ASMS</Text>
                </Text>
            </View>

            <View style={styles.form}>
                <View style={styles.input}>
                <Text style={styles.inputLabel}>E-mail</Text>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="email-address"
                    onChangeText={handleEmailChange}
                    onBlur={() => {}}
                    placeholder="john@example.com"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                />
                </View>

                <View style={styles.input}>
                <Text style={styles.inputLabel}>Mật khẩu</Text>
                <TextInput
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    placeholder="********"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    secureTextEntry={true}
                    onChangeText={handlePasswordChange}
                />
                </View>

                <View style={styles.formAction}>
                <TouchableOpacity onPress={() => handleLogin()} style={styles.btn}>
                    <Text style={styles.btnText}>Đăng nhập</Text>
                </TouchableOpacity>
                </View>
                <Text style={styles.formLink}>Quên mật khẩu?</Text>
            </View>

            <TouchableOpacity
                onPress={() => {
                }}
                style={{ marginTop: "auto" }}
            >
                <Text style={styles.formFooter}>
                Bạn chưa có tài khoản?{" "}
                <Text style={{ textDecorationLine: "underline" }}>Đăng ký</Text>
                </Text>
            </TouchableOpacity>
            </View>
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