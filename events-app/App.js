import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './navigation/stack';

export default function App() {

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

