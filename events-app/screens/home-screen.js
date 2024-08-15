import { View, StyleSheet } from "react-native";
import EventList from "../components/events/event-list";

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <EventList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  }
});

export default HomeScreen;