import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Spinner
} from "native-base";
import { Linking } from "react-native";
import { Grid, Col } from "react-native-easy-grid";
import Entypo from "react-native-vector-icons/Entypo";
import { SliderBox } from "react-native-image-slider-box";
import BusinessResource from "../resources/Business.resource";


const RestaurantDetailComponent = props => {
  const restaurant = props.route.params.restaurant;
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
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>{restaurantDetails.name}</Text>
              </CardItem>
              <CardItem cardBody>
                <SliderBox images={restaurantDetails.photos} />
              </CardItem>
              <CardItem>
                <Text style={{ fontWeight: "bold" }}>Cuisine: </Text>
                {restaurantDetails.categories.map(category => (
                  <Entypo key={category.alias} name="dot-single">
                    <Text>{category.title}</Text>
                  </Entypo>
                ))}
              </CardItem>
              <CardItem>
                <Text style={{ fontWeight: "bold" }}>Price: </Text>
                <Text>{restaurantDetails.price}</Text>
              </CardItem>
              <CardItem>
                <Text style={{ fontWeight: "bold" }}>Phone: </Text>
                <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(`tel:${restaurantDetails.display_phone}`)}>{restaurantDetails.display_phone}</Text>
              </CardItem>
              <CardItem>
                <Text style={{ fontWeight: "bold" }}>Address: </Text>
                <Text>{restaurantDetails.location.address1}</Text>
              </CardItem>
            </Card>
          )}
      </Content>
    </Container>
  );
};

export default RestaurantDetailComponent;
