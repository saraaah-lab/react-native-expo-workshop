import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { FavoriteScreen } from "../screens/FavoriteScreen";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
  </Tab.Navigator>
);
