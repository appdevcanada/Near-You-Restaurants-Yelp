import React, { useEffect, useState } from "react";
import { Platform } from 'react-native';
import { Container, Content, Button, Text, Spinner } from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

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
    } catch (error) { console.log(error); }
  };

  const findCoordinates = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
      console.log('Permission to access location was denied');
      return;
    } else {
      let location = await Location.getCurrentPositionAsync({ accuracy: 3 }); // Accuracy.Balanced
      const { latitude, longitude } = location.coords;
      setCoordinates({ latitude, longitude });
    }
  };

  useEffect(() => {
    loadFonts();
    findCoordinates();
  }, []);

  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1 }} padder>
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
                  <Text>I'm starving!</Text>
                </Button>
              </Col>
            </Grid>
          )}
      </Content>
    </Container>
  );
};

export default HomeComponent;
