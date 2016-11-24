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

// import React, { Component } from 'react';
// import { StyleSheet,AppRegistry, Text, View } from 'react-native';

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { showText: true, TextColor: 'red' };


//     // 每1000毫秒对showText状态做一次取反操作
//     setInterval(() => {
//       // this.setState({ showText: !this.state.showText });
//       this.setState({ TextColor: this.state.TextColor == 'black' ? 'red' : 'black' });
//     }, 1000);
//   }

//   render() {
//     // 根据当前showText的值决定是否显示text内容
//     let display = this.state.showText ? this.props.text : ' ';
//     return (
//       <Text style={{color: this.state.TextColor}}>{display}</Text>
//     );
//   }
// }


// class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   text:{
//     color:'red'
//   }
// });
// AppRegistry.registerComponent('HelloWorld', () => BlinkApp);

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };
// // 注册应用(registerComponent)后才能正确渲染
// // 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
// AppRegistry.registerComponent('HelloWorld', () => FixedDimensionsBasics);

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       // 试试去掉父View中的`flex: 1`。
//       // 则父View不再具有尺寸，因此子组件也无法再撑开。
//       // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
//       <View style={{ flex: 1 }}>
//         <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
//         <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
//         <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
//       </View>
//     );
//   }
// };

// AppRegistry.registerComponent('HelloWorld', () => FlexDimensionsBasics);

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // 尝试把`flexDirection`改为`column`看看
//       <View style={{flex: 1, flexDirection: 'column-reverse'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// AppRegistry.registerComponent('HelloWorld', () => FlexDirectionBasics);

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// class JustifyContentBasics extends Component {
//   render() {
//     return (
//       // 尝试把`justifyContent`改为`center`看看
//       // 尝试把`flexDirection`改为`row`看看
//       <View style={{
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'stretch',
//       }}>
//         <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
//         <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
//         <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
//       </View>
//     );
//   }
// };

// AppRegistry.registerComponent('HelloWorld', () => JustifyContentBasics);

// import React, { Component } from 'react';
// import { AppRegistry, Text, TextInput, View } from 'react-native';

// class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }

//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => {  var result = word && '🍕'; 
//              return result;}).join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }
// // 注册应用(registerComponent)后才能正确渲染
// // 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
// AppRegistry.registerComponent('HelloWorld', () => PizzaTranslator);

// import React, { Component } from 'react';
// import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'

// class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return(
//         <ScrollView>
//           <Text style={{fontSize:30}}>Scroll me plz</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:30}}>If you like</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:30}}>Scrolling down</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:30}}>What's the best</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:30}}>Framework around?</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:30}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }

// // 注册应用(registerComponent)后才能正确渲染
// // 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
// AppRegistry.registerComponent(
//   'HelloWorld',
//   () => IScrolledDownAndWhatHappenedNextShockedMe);

// import React, { Component } from 'react';
// import { AppRegistry, ListView, Text, View } from 'react-native';

// class ListViewBasics extends Component {
//   // 初始化模拟数据
//   constructor(props) {
//     super(props);
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: ds.cloneWithRows([
//         'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//       ])
//     };
//   }
//   render() {
//     return (
//       <View style={{flex: 1, paddingTop: 22}}>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) => <Text>{rowData}</Text>}
//         />
//       </View>
//     );
//   }
// }

// // 注册应用(registerComponent)后才能正确渲染
// // 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
// AppRegistry.registerComponent('HelloWorld', () => ListViewBasics);

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Alert, Button, Navigator } from 'react-native';
import SecondPage from './js/SecondPage';
class AppNavigator extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'firstPage', component: FirstPage }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.FadeAndroid;
        } }
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />;
        } } />
    );
  }
}
class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClick() {
    // Alert.alert("正在跳转");
    const { navigator } = this.props;
    //为什么这里可以取得 props.navigator?请看上文:
    //<Component {...route.params} navigator={navigator} />
    //这里传递了navigator作为props
    if (navigator) {
      navigator.push({
        name: 'SecondPageComponent',
        component: SecondPage,
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          第一页
          </Text>
        <View style={styles.btncontainer} >
          <Button
            title='   下一页   '
            style={styles.btn}
            onPress={this.onClick.bind(this)} />
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'blue'
  },
  btn: {
    width: 50,
    height: 50,
    textAlign: 'center',
    color: 'red'
  },
  container: {
    flex: 1
  },
  btncontainer: {
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('HelloWorld', () => AppNavigator);