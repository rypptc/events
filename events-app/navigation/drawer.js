import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView, View, Image, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { HomeStack, ProfileStack } from './stack';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{ flex: 1, paddingTop: 20, backgroundColor: '#99f6e4' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 140 }}>
              <Image 
                style={{ height: 100, width: 100, resizeMode: 'contain' }} 
                source={require('../assets/images/logos/logo.png')} 
              />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
              label="More info"
              onPress={() => Linking.openURL('https://google.com')}
              icon={() => (
                <Ionicons name="information" size={22} />
              )}
            />
          </SafeAreaView>
        );
      }}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{ 
          title: "Home",
          drawerIcon: () => <Ionicons name="home" size={22} />
        }} 
      />
      <Drawer.Screen 
        name="ProfilesStack" 
        component={ProfileStack} 
        options={{ 
          title: 'Profiles',
          drawerIcon: () => <MaterialCommunityIcons name="face-man-profile" size={22} />
        }}
      />
    </Drawer.Navigator>
  );
}
