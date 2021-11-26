import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';

class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state={
            SearchingField: ''
        }
    }
    handleSearching = (text) => {
        this.setState({SearchingField: text});
    };
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="请输入待查找的专区"
                    placeholderTextColor="#ccc"
                    autoCapitalize="none"
                    keyboardType="default"
                    returnKeyType="search"
                    onChangeText={this.handleSearching}
                />
            </View>
        );
    }
}
export default Inputs;

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
    },
    input: {
        margin: 15,
        paddingLeft: 8,
        height: 40,
        borderColor: '#eeeeee',
        borderWidth: 1,
    },
});
