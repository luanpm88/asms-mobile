import { StyleSheet } from 'react-native';
import Colors from "./Colors";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: Colors.colorText,
    fontWeight: "600",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    }
});

export default globalStyles;
