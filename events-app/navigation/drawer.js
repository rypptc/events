import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './stack';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home2" component={HomeStack} />
    </Drawer.Navigator>
  );
}
