import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Spinner
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import Entypo from "react-native-vector-icons/Entypo";
import { SliderBox } from "react-native-image-slider-box";
import BusinessResource from "../resources/Business.resource";


const RestaurantDetailComponent = props => {
  const restaurant = props.navigation.getParam("restaurant");
  const [restaurantDetails, setRestaurantDetails] = useState(undefined);
  const businessResourse = new BusinessResource();

  const loadRestaurantDetails = async () => {
    try {
      const restaurantDetails = await businessResourse.getRestaurantDetails(
        restaurant.id
      );
      setRestaurantDetails(restaurantDetails);
    } catch (error) { }
  };

  useEffect(() => {
    loadRestaurantDetails();
  }, []);

  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1 }}>
        {restaurantDetails == undefined ? (
          <Grid style={{ alignItems: "center" }}>
            <Col>
              <Spinner color="blue" />
            </Col>
          </Grid>
        ) : (
            <Card>
              <CardItem header bordered>
                <Text>{restaurantDetails.name}</Text>
              </CardItem>
              <CardItem cardBody>
                <SliderBox images={restaurantDetails.photos} />
              </CardItem>
              <CardItem>
                <Text style={{ fontWeight: "bold" }}>Cuisine </Text>
                {restaurantDetails.categories.map(category => (
                  <Entypo key={category.alias} name="dot-single">
                    <Text>{category.title}</Text>
                  </Entypo>
                ))}
              </CardItem>
              <CardItem>
                <Text style={{ fontWeight: "bold" }}>Price </Text>
                <Text>{restaurantDetails.price}</Text>
              </CardItem>
              <CardItem>
                <Text style={{ fontWeight: "bold" }}>Phone </Text>
                <Text>{restaurantDetails.display_phone}</Text>
              </CardItem>
            </Card>
          )}
      </Content>
    </Container>
  );
};

export default RestaurantDetailComponent;
