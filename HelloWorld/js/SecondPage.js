import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button, Alert } from 'react-native';
class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <View  >
                <Text style={styles.text} >
                    我是第二个界面
                </Text>
                <Button
                    title='回上一页'
                    onPress={()=>{
                        this.props.navigator.pop();
                    }}
                />
            </View>

        );
    }
}
const styles = StyleSheet.create({
                    text: {
                    color: 'red',
    }
});
export default SecondPage;