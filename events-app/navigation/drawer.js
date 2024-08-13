import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './stack';
import { ProfileStack } from './stack';  // Ensure this import is correct

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
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
