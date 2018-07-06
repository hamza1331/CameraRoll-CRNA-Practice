// import TextInputExample from './components/TextInput'
// import ScreenTwo from './components/ScreenTwo'
// import FixedContainer from './components/fixedContainer'
// import FlexContainer from './components/flexContainer'
// import GeneralExample from './components/Native'
// import {
//   createStackNavigator
// } from 'react-navigation';

// const App = createStackNavigator({
//   Home: { screen: TextInputExample,navigationOptions: {
//     title: 'Home',
//   } },
//   ScreenTwo: { screen: ScreenTwo,navigationOptions: {
//     title: 'ScreenTwo',
//   } },
// },
//   {
//     initialRouteName: 'Home'
//   }
// );
// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import VerticalScrollView from './components/verticalScrollView'
// import FlatListComponent from './components/FlatList'
import SecListComponent from './components/SecList'
import AccessCamera from './components/AccessCamera'
export default class App extends Component {
  render() {
    return (
      <AccessCamera/>
    )
  }
}