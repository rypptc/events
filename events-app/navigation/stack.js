import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import EventDetailScreen from '../screens/event-detail-screen';
import ProfilesScreen from '../screens/profiles/profiles-screen';
import ProfileDetailScreen from '../screens/profiles/profile-detail-screen';
import { navOptions } from './options';
import { HomeTabs } from './tabs';

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={() => navOptions(navigation)}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeTabs} 
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="Event" 
        component={EventDetailScreen} 
        options={{ title: 'Event Details' }}
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
