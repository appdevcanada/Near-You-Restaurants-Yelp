import React, { useEffect, useState } from "react";
import { Platform } from 'react-native';
import { Container, Content, Button, Text, Spinner } from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const HomeComponent = props => {

  const [coordinates, setCoordinates] = useState({});
  const [loading, setLoading] = useState(true);
  const loadFonts = async () => {
    try {
      if (Platform.OS === "android") {
        await Font.loadAsync({
          Roboto: require("../assets/Roboto.ttf"),
          Roboto_medium: require("../assets/Roboto_medium.ttf"),
          ...Ionicons.font
        });
      }
      setLoading(false);
    } catch (error) { console.log(error) }
  };

  const findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCoordinates({ latitude, longitude });
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    loadFonts();
    findCoordinates();
  }, []);

  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
        {loading ? (
          <Grid style={{ alignItems: "center" }}>
            <Col>
              <Spinner color="blue" />
            </Col>
          </Grid>
        ) : (
            <Grid style={{ alignItems: "center" }}>
              <Col>
                <Button style={{ alignSelf: "center" }}
                  onPress={() => {
                    props.navigation.navigate("Restaurants", {
                      coordinates
                    });
                  }}>
                  <Text>Find restaurants near me!</Text>
                </Button>
              </Col>
            </Grid>
          )}
      </Content>
    </Container>
  );
};

export default HomeComponent;
