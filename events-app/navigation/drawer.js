import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView, View, Image, Linking } from 'react-native';
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
            />
          </SafeAreaView>
        );
      }}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{ title: "Home" }} 
      />
      <Drawer.Screen 
        name="ProfilesStack" 
        component={ProfileStack} 
        options={{ title: 'Profiles' }} 
      />
    </Drawer.Navigator>
  );
}
