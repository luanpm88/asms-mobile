import { View, SafeAreaView, StyleSheet, Button, Platform, Image, Text, TouchableOpacity } from "react-native";
import { useState, useContext } from "react";
import FormTextField from "@/app/components/FormTextField";
import { loadUser, login } from "@/app/services/AuthService";
import { useRouter } from "expo-router";
import AuthContext from "@/app/contexts/AuthContext";

export default function() {
  interface ErrorsProps {
    email?: [],
    password?: [],
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const [errors, setErrors] = useState<ErrorsProps>({});
  const router = useRouter();

  async function handleLogin() {
    try {
      await login({
        email, password, device_name: `${Platform.OS} ${Platform.Version}`
      })

      const user = await loadUser();
      setUser(user);
    } catch (e: any) {
      if (e.response?.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Image
          alt="App Logo"
          resizeMode="contain"
          style={styles.headerImg}
          source={require("../../../../assets/images/logo.png")}
        />
        <Text style={styles.title}>
          Đăng nhập vào <Text style={{ color: "#075eec" }}>ASMS</Text>
        </Text>
      </View>
      <View style={styles.container}>
        <FormTextField 
          label="Email:" 
          value={email} 
          onChangeText={(text: string) => setEmail(text)} 
          keyboardType="email-address"
          errors={errors.email}
        />
        <FormTextField 
          label="Password:" 
          secureTextEntry={true} 
          value={password} 
          onChangeText={(text: string) => setPassword(text)} 
          errors={errors.password}
        />
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1
  },
  container: {
    paddingTop: 50,
    paddingLeft: 20, 
    paddingRight: 20, 
    rowGap: 16,
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