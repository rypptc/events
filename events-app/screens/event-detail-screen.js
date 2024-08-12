import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from "react-native";

const EventDetailScreen = () => {
  const route = useRoute();

  const { eventId } = route.params;
  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 20 }}>This is the event detail screen for {eventId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  }
});

export default EventDetailScreen;
