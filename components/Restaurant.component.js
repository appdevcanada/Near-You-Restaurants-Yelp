import React, { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Spinner,
  Row
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import { FlatList, TouchableOpacity, Image } from "react-native";
import BusinessResource from "../resources/Business.resource";


const RestaurantComponent = props => {

  const businessResourse = new BusinessResource();

  const [restaurants, setRestaurants] = useState([]);

  const loadRestaurants = async coordinates => {
    try {
      const restaurants = await businessResourse.getRestaurants(coordinates);
      setRestaurants(restaurants.businesses);
    } catch (error) { }
  };

  useEffect(() => {
    loadRestaurants(props.navigation.getParam("coordinates"));
  }, []);

  const rating = rating => {
    let wholeStars = Math.floor(rating);
    let icons = [];
    for (count = 1; count <= wholeStars; count++) {
      icons.push(
        <FontAwesome
          key={count}
          name="star"
          color="rgb(246,178,46)"
          fontSize={20}
        />
      );
    }
    if (rating % 2 != 0) {
      icons.push(
        <FontAwesome
          key={count}
          name="star-half-empty"
          color="rgb(246,178,46)"
          fontSize={20}
        />
      );
    }
    for (count = icons.length + 1; count <= 5; count++) {
      icons.push(
        <FontAwesome
          key={count}
          name="star-o"
          color="rgb(246,178,46)"
          fontSize={20}
        />
      );
    }
    return icons;
  };


  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1 }}>
        {restaurants.length == 0 ? (
          <Grid style={{ alignItems: "center" }}>
            <Col>
              <Spinner color="blue" />
            </Col>
          </Grid>
        ) : (
            <FlatList
              data={restaurants}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("RestaurantDetails", {
                      restaurant: item
                    });
                  }}
                >
                  <Card>
                    <CardItem header bordered>
                      <Grid>
                        <Col>
                          <Text>{item.name}</Text>
                        </Col>
                        <Col style={{ flex: 1, alignItems: "flex-end" }}>
                          <Row>{rating(item.rating)}</Row>
                          <Row>
                            <Text>{(item.distance / 1000).toFixed(2)} Km</Text>
                          </Row>
                        </Col>
                      </Grid>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        source={{ uri: item.image_url ? item.image_url : "none" }}
                        style={{ height: 200, width: null, flex: 1 }}
                      />
                    </CardItem>
                    <CardItem
                      footer
                      style={{ flex: 1, justifyContent: "space-between" }}
                    >
                      <Text>{item.location.address1}</Text>
                      <Text>{item.display_phone}</Text>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              )}
            />
          )}
      </Content>
    </Container>
  )
};

export default RestaurantComponent;
