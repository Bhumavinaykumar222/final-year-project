import { createStackNavigator } from "@react-navigation/stack";
import RestaurantStack from "../restaurant/RestaurantStack";
import Login from "../auth/Login";
import MyTab from "../routes/Tab";
import AuthScreen from "../auth/AuthScreen";

const Base = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AuthScreen"
        component={AuthScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Restaurant"
        component={MyTab}
      />
    </Stack.Navigator>
  );
};

export default Base;
