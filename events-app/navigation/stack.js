import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import EventDetailScreen from '../screens/event-detail-screen';
import ProfilesScreen from '../screens/profiles/profiles-screen';
import ProfileDetailScreen from '../screens/profiles/profile-detail-screen';
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

export const ProfileStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={() => navOptions(navigation)}
    >
      <Stack.Screen 
        name="Profiles" 
        component={ProfilesScreen} 
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileDetailScreen} 
      />
    </Stack.Navigator>
  );
}
