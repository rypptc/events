import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home-screen';
import QrCodeScreen from '../screens/qr-code-screen';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: 'red',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTabs') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'QrCode') {
            iconName = focused ? 'qr-code' : 'qr-code-outline';
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
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