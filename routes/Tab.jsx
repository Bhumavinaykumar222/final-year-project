import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import RestaurantStack from "../restaurant/RestaurantStack";
import Profile from "../profile/Profile";
import { Iconify } from "react-native-iconify";
import { theme } from "../../style/Theme";
import Order from "../orders/Order";
const MyTab = () => {
  const Tabs = createBottomTabNavigator();
  const FummyScreen = () => {
    return (
      <View>
        <Text>Order Will Displyad Here</Text>
      </View>
    );
  };
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="RestaurantStack"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Iconify
                icon="ic:twotone-restaurant"
                color={
                  focused
                    ? theme.colors.orange.secondary
                    : theme.colors.tertiary
                }
                size={30}
              />
            );
          },
        }}
        component={RestaurantStack}
      />
      <Tabs.Screen
        name="Proflie"
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <Iconify
              icon="iconamoon:profile-circle-fill"
              color={
                focused ? theme.colors.orange.secondary : theme.colors.tertiary
              }
              size={30}
            />
          ),
        }}
        component={Profile}
      />
      <Tabs.Screen
        name="Orders"
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <Iconify
              icon="mdi:cart"
              color={
                focused ? theme.colors.orange.secondary : theme.colors.tertiary
              }
              size={30}
            />
          ),
        }}
        component={Order}
      />
    </Tabs.Navigator>
  );
};

export default MyTab;
