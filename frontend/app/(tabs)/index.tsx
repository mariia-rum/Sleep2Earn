import "react-native-get-random-values";
import "../../src/crypto-polyfill.js";
import { Text, View, StyleSheet } from "react-native";
import { AppKitButton } from "@reown/appkit-ethers5-react-native";
import styles from "../styles/index.styles";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <AppKitButton />
    </View>
  );
}
