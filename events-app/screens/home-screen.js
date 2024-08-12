import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <Text>This is the home screen</Text>
      <Button title="move to detail" onPress={() => navigation.navigate("Event")} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  }
});

export default HomeScreen;