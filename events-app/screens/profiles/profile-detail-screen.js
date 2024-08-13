import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { useLayoutEffect } from "react";

const ProfileDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { profileId } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Profile id: {profileId}</Text>
    </View>
  );
};

export default ProfileDetailScreen;
