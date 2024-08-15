import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";

const EventDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { eventId, name, description, qrCode } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, name]);

  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 20 }}>This is the event detail screen for {eventId}</Text>
      <Text style={{ fontSize: 14 }}>{name}</Text>
      <Text style={{ fontSize: 14 }}>{description}</Text>
      <Image
        style={{ width: 200, height: 200, marginTop: 20 }}
        source={{ uri: qrCode }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default EventDetailScreen;
