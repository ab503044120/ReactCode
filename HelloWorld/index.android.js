/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class HelloWorld extends Component {
//   render() {
//     return (
//       // <View style={styles.container}>
//       //   <Text style={styles.welcome}>
//       //     Welcome to React Native!
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     To get started, edit index.android.js
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     Double tap R on your keyboard to reload,{'\n'}
//       //     Shake or press menu button for dev menu
//       //   </Text>
//       // </View>
//       <View>
//          <Text style = {styles.welcome}>
//           你好
//       </Text>
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

// AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }

// class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('HelloWorld', () => LotsOfGreetings);

import React, { Component } from 'react';
import { StyleSheet,AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true, TextColor: 'red' };


    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      // this.setState({ showText: !this.state.showText });
      this.setState({ TextColor: this.state.TextColor == 'black' ? 'red' : 'black' });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={{color: this.state.TextColor}}>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text:{
    color:'red'
  }
});
AppRegistry.registerComponent('HelloWorld', () => BlinkApp);