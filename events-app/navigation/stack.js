import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import EventDetailScreen from '../screens/event-detail-screen';
import { navOptions } from './options';

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={() => navOptions(navigation)}  // Use navOptions to set screen options
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