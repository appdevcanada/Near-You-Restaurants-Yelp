import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeComponent from "./components/Home.component";
import RestaurantDetailsComponent from "./components/RestaurantDetail.component";
import RestaurantComponent from "./components/Restaurant.component";


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeComponent,
      navigationOptions: {
        title: "The best restaurants near you",
        headerStyle: { backgroundColor: "#D0ECFB" }
      }
    },
    Restaurants: {
      screen: RestaurantComponent,
      navigationOptions: {
        title: "Restaurants",
        headerStyle: { backgroundColor: "#D0ECFB" }
      }
    },
    RestaurantDetails: {
      screen: RestaurantDetailsComponent,
      navigationOptions: {
        title: "Details",
        headerStyle: { backgroundColor: "#D0ECFB" }
      }
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#D0ECFB" }
    }
  }
);

export default createAppContainer(AppNavigator);
