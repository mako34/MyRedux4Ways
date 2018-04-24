
// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from './actions'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles

  return (
    <View style={container}>
      <Text style={text}> Mako Redux Examples </Text>
      <TouchableHighlight style= {button}>
        <Text style={buttonText}> Load Data </Text>
      </TouchableHighlight>
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop:100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ff00'
  },
  buttonText: {
    color: 'white'
  }
})

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
