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

  const businessResource = new BusinessResource();

  const [restaurants, setRestaurants] = useState([]);

  const loadRestaurants = async coordinates => {
    try {
      const restaurants = await businessResource.getRestaurants(coordinates);
      setRestaurants(restaurants.businesses);
    }
    catch (error) { console.log(error) }
  };

  useEffect(() => {
    loadRestaurants(props.route.params.coordinates);
  }, []);

  const rating = rating => {
    let wholeStars = Math.floor(rating);
    let icons = [];
    let count = 0;
    for (count = 1; count <= wholeStars; count++) {
      icons.push(
        <FontAwesome
          key={count}
          name="star"
          color="rgb(246,178,46)"
          size={16}
        />
      );
    }
    if (rating % 2 != 0) {
      icons.push(
        <FontAwesome
          key={count}
          name="star-half-empty"
          color="rgb(246,178,46)"
          size={16}
        />)
    }
    for (count = icons.length + 1; count <= 5; count++) {
      icons.push(
        <FontAwesome
          key={count}
          name="star-o"
          color="rgb(246,178,46)"
          size={16}
        />
      );
    }
    return icons;
  };

  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1 }} padder>
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
                  <Card style={{ borderRadius: 10 }}>
                    <CardItem header bordered style={{ borderRadius: 10 }}>
                      <Grid>
                        <Col style={{ width: '60%' }}>
                          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.name}</Text>
                          <Text note style={{ fontWeight: "normal" }}>{item.categories[0].title}</Text>
                        </Col>
                        <Col style={{ width: '40%', flex: 1, alignItems: "flex-end" }}>
                          <Row>{rating(item.rating)}</Row>
                          <Row>
                            <Text>{(item.distance / 1000).toFixed(2)} Km</Text>
                          </Row>
                        </Col>
                      </Grid>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        source={{ uri: item.image_url != "" ? item.image_url : "https://via.placeholder.com/200/D0ECFB/000000?text=No+Image+Available" }}
                        style={{ height: 200, width: null, flex: 1 }}
                      />
                    </CardItem>
                    <CardItem footer
                      style={{ flex: 1, justifyContent: "space-between", borderRadius: 10 }}
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
