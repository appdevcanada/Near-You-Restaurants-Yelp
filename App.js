import React from "react";
import HomeComponent from "./components/Home.component";
import RestaurantDetailsComponent from "./components/RestaurantDetail.component";
import RestaurantComponent from "./components/Restaurant.component";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
          component={HomeComponent}
          options={{
            title: "🍴Resto - Restaurants near you",
            headerStyle: { backgroundColor: "#D0ECFB" }
          }} />
        <Stack.Screen name="Restaurants"
          component={RestaurantComponent}
          options={{
            title: "Restaurants List",
            headerStyle: { backgroundColor: "#D0ECFB" },
            headerBackTitleVisible: false,
          }} />
        <Stack.Screen name="RestaurantDetails"
          component={RestaurantDetailsComponent}
          options={{
            title: "Restaurant Details",
            headerStyle: { backgroundColor: "#D0ECFB" },
            headerBackTitleVisible: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
