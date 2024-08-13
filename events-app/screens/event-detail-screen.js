import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";

const EventDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { eventId, title, description } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,  // Set the header title to the event title
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"  // Color of the back button
          onPress={() => navigation.goBack()}  // Handle back navigation
        />
      ),
    });
  }, [navigation, title]);

  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 20 }}>This is the event detail screen for {eventId}</Text>
      <Text style={{ fontSize: 20 }}>{title}</Text>
      <Text style={{ fontSize: 20 }}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  }
});

export default EventDetailScreen;
