import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import EventScreen from './src/screens/EventScreen';
import UserScreen from './src/screens/UserScreen';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', color: '#000' }}>
      <Text>User</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          } else if (route.name === 'Event') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
      }}
      >
        <Tab.Screen name="Home" component={ HomeScreen } />
        <Tab.Screen name="Event" component={ EventScreen } />
        <Tab.Screen name="User" component={ UserScreen } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MainScreenNavigator from './src/screens/index';

// // const App: () => React$Node = () => {
// //   return (
// //     <View style={styles.body}>
// //       <Title />
// //       <View style={styles.sectionContainer}>
// //         <Text style={styles.sectionTitle}>Recofit_Native</Text>
// //         <Text style={styles.sectionDescription}>
// //           タイムライン
// //         </Text>
// //         <ImageList />
// //       </View>
// //     </View>
// //   );
// // };

// const RootStack = createBottomTabNavigator (
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: { headerTitle: 'Home'},
//     },
//     Detail: {
//       screen: DetailScreen,
//       navigationOptions: { headerTitle: 'Detail'},
//     },
//     User: {
//       screen: UserScreen,
//       navigationOptions: { headerTitle: 'User'},
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// // export default class App extends React.Component {
// //   render() {
// //     return <RootStack />;
// //   }
// // }

// export default class App extends React.Component {
//   render() {
//     return <MainScreenNavigator />;
//   }
// }

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// // export default App;
