<p align="center">
  <img src="/assets/splash2.png" width="300px" alt="React Native Resto Yelp App" />
</p>

# Resto - Yelp React Native App
React Native App created for iOS and Android with geolocation and Yelp API to locate restaurants near you.

See the [demos on Snack/Expo](https://snack.expo.io/@appdevcanada/near-you-restaurants-yelp?&preview=true&platform=android&supportedPlatforms=android,ios).

## Quickstart

First, clone the repository:

```bash
git clone https://github.com/appdevcanada/Near-You-Restaurants-Yelp.git rn-resto-yelp
cd rn-resto-yelp

# install the dependencies
npm install

# start the server
expo start
```

## Configuring the Application

This app uses [Yelp API](https://www.yelp.com/developers) for restaurants geolocation around you. In order to test the application, you can use my API key, but for your own development, please register there and get yours. After getting the API key, go to `/resources/Fetch.resource.js` and change the `this.apiKey=` to your API key value.

## Starting the Application

```bash
expo start
```

This will open the browser with the available options to test the application.
Select iOS or Android to open it in the simulator, or in your device. In order to run in simulators, you need to have them previously installed.
This app was not created to run/simulate in web browsers, only in mobile devices.

## Libraries We'll Use

This app uses the following technologies/libraries:

* expo/vector-icons
* react-native-community/masked-view
* react-navigation/native
* react-navigation/stack
* expo
* native-base
* react
* react-native
* react-native-gesture-handler
* expo-permissions
* expo-location
* And much much more

## Contributing

Fell free to clone this repository and contribute with more functionality, new ideas and improvements.

```shell
git clone https://github.com/appdevcanada/Near-You-Restaurants-Yelp.git rn-resto-yelp
cd rn-resto-yelp
npm install
expo start
```
___

## Screenshots

**iOS** | **Android**
|:---:|:---:|
![iOS Screenshot 1](/screenshots/iOS/ios1.png "Main Screen") | ![Android Screenshot 1](/screenshots/Android/and1.png "Location access")
![iOS Screenshot 2](/screenshots/iOS/ios2.png "Result Screen")	| ![Android Screenshot 2](/screenshots/Android/and2.png "Google Location")
![iOS Screenshot 3](/screenshots/iOS/ios3.png "Result Screen")	| ![Android Screenshot 3](/screenshots/Android/and3.png "Main Screen")
![iOS Screenshot 4](/screenshots/iOS/ios4.png "Detail Screen")	| ![Android Screenshot 4](/screenshots/Android/and4.png "Result Screen")
![iOS Screenshot 5](/screenshots/iOS/ios5.png "Call number")	| ![Android Screenshot 5](/screenshots/Android/and5.png "Result Screen")
|	 | ![Android Screenshot 6](/screenshots/Android/and6.png "Detail Screen")
|	 | ![Android Screenshot 7](/screenshots/Android/and7.png "Detail Screen Up")
|	 | ![Android Screenshot 8](/screenshots/Android/and8.png "Call number")
