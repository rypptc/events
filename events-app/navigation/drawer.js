import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home-screen';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
