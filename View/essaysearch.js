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
import {List, SearchBar, TabBar} from '@ant-design/react-native';
import Inputs from '../components/inputBox';

const Appy = () => {
    return (
        <ScrollView>
            <View
                style={{height:50,backgroundColor:'whitesmoke',flexDirection:"row"}}
            >
                <View
                    style={{width:"50%",alignItems:"center", justifyContent: 'center'}}
                >
                    <Text
                        style={{color:'darkslategrey'}}
                    > 分享广场 </Text>
                </View>
                <View
                    style={{width:"50%",alignItems:"center",justifyContent: 'center'}}
                >
                    <Text
                        style={{color:'rgba(110, 210, 110, 1)'}}>
                        文献专区
                    </Text>
                </View>
            </View>
            <View>
                <Inputs />
            </View>
        <View>
            <List>
                <List.Item style={styles.itemSetting1}>
                    <Text>应用文专区 APPLICATION</Text>
                </List.Item>
                <List.Item style={styles.itemSetting2}>
                    <Text>说明文专区 DESCRIPTION</Text>
                </List.Item>
                <List.Item style={styles.itemSetting1}>
                    <Text>记叙文专区 NARRATIVE</Text>
                </List.Item>
                <List.Item style={styles.itemSetting2}>
                    <Text>电子邮件专区 E-MAIL</Text>
                </List.Item>
                <List.Item style={styles.itemSetting1}>
                    <Text>学术文体专区 ACADEMIC</Text>
                </List.Item>
                <List.Item style={styles.itemSetting2}>
                    <Text>文学名著专区 LITERATURE</Text>
                </List.Item>
                <List.Item style={styles.itemSetting1}>
                    <Text>法律文献专区 LEGAL TEXT</Text>
                </List.Item>
                <List.Item style={styles.itemSetting2}>
                    <Text>科技文献专区 TECHNOLOGY</Text>
                </List.Item>
                <List.Item style={styles.itemSetting1}>
                    <Text>政治热点专区 POLTICS</Text>
                </List.Item>
                <List.Item style={styles.itemSetting2}>
                    <Text>经济金融专区 ECONOMY</Text>
                </List.Item>
                <List.Item style={styles.itemSetting1}>
                    <Text>文艺娱乐专区 ENTERTAINMENT</Text>
                </List.Item>
                <List.Item style={styles.itemSetting2}>
                    <Text>医疗卫生专区 MEDICINE</Text>
                </List.Item>
            </List>
        </View>
</ScrollView>
);
};

const styles = StyleSheet.create({
    view: {
        height: 200,
        width: 200,
        backgroundColor: 'rgba(110, 210, 110, 1)',
    },
    color1: {
        backgroundColor: 'rgba(110, 100, 200, 0.2)',
    },
    fontsize: {
        textAlign: 'center',
        fontSize: 40,
    },
    itemSetting1: {
        height: 45,
        backgroundColor: 'rgba(79, 230, 148, 0.1)',
    },
    itemSetting2: {
        height: 45,
    },
});
export default Appy;
