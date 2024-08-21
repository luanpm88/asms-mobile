import { StyleSheet } from "react-native";
import { View, Text, TextInput } from "react-native";

interface FormTextFieldProps {
    label?: string,
    secureTextEntry?: boolean,
    value?: string,
    onChangeText?: any,
    keyboardType?: any,
    errors?: []
}

export default function FormTextField({ label, errors = [], ...rest }: FormTextFieldProps) {
    return (
        <View>
            {label && 
            <Text style={styles.label}
            >{ label }</Text>}
            <TextInput style={{
            backgroundColor: "#f1f5f9",
            height: 40,
            marginTop: 4,
            marginBottom: 5,
            borderWidth: 1,
            borderRadius: 1,
            borderColor: "#cbd5e1",
            padding: 10
            }} 
            { ...rest }
            />
            {errors.map((err, index) => {
              return <Text key={index} style={styles.error}>{err}</Text>
            })}
        </View>
    );
};
  
  const styles = StyleSheet.create({
    label: {
      fontSize: 17,
      fontWeight: "600",
      color: "#222",
      marginBottom: 8,
    },
    error: {
      color: "red",
      marginTop: 2
    }
  });