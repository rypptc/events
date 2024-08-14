import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home-screen';
import QrCodeScreen from '../screens/qr-code-screen';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="HomeTabs"
        component={HomeScreen}
        options={{
          title: "Home",
          headerTitleAlign: 'center'
        }}
      />
      <Tab.Screen
        name="QrCode"
        component={QrCodeScreen}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};