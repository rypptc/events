import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import EventDetailScreen from '../screens/event-detail-screen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',  // Ensure the header title is centered on both platforms
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Home' }}  // Optional: Custom title for the Home screen
      />
      <Stack.Screen 
        name="Event" 
        component={EventDetailScreen} 
        options={{ title: 'Event Details' }}  // Optional: Custom title for the Event screen
      />
    </Stack.Navigator>
  );
}