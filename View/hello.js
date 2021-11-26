import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import { List, SearchBar, TabBar, Provider } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/AntDesign'
// import {Header}


export const Hello = () => {

  return (
      <Provider>
          <View
              style={{height:50,backgroundColor:'whitesmoke',flexDirection:"row"}}
          >
              <View
                  style={{width:"15%"}}
              >
                  <Text>

                  </Text>
              </View>
              <View
                  style={{width:"70%",alignItems:"center", justifyContent: 'center'}}
              >
                  <Text
                      style={{color:'darkslategrey'}}
                  > 我的设置 </Text>
              </View>
              <View
                  style={{width:"15%",alignItems:"center",justifyContent: 'center'}}
              >
                  <Text
                      style={{color:'darkslategrey'}}>
                      帮助
                  </Text>
              </View>

          </View>
    <ScrollView>


        <View
            style={{height: 105,backgroundColor:'white',flexDirection:"row"}}
        >
            <View
                style={{width:'25%',alignItems:'center'}}
            >
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{ width: 80, height: 80, marginTop:13 }}
                />
            </View>
            <View
               style={{width:'60%'}}
            >
                <Text
                    style={{marginTop:20,color:'darkslategrey'}}
                > 流泪猫猫头 </Text>
                <Text
                    style={{marginTop:5, color:'grey'}}
                > ID 1234567 / <Text style={{color:'steelblue'}}>LVL 9</Text>
                </Text>
            </View>
            <View
                style={{width:'15%'}}
            >
                <Icon name={"right"} style={{color: "grey", marginTop:40}} size={15}/>
            </View>

        </View>
        <View
            style={{width:"92%", height:80,backgroundColor:'whitesmoke',borderColor:'black',borderRadius:10,marginLeft:"4%",marginTop:0,flexDirection:"row"}}
        >
            <View
                style={{justifyContent: 'center',width:'33%',alignItems:'center'}}
            >
                <Text style={{color:'steelblue'}}
                >1</Text>
                <Text
                    style={{color:'grey',fontSize:13}}
                >
                    连续签到
                </Text>
            </View>
            <View style={{justifyContent: 'center',width:'34%',alignItems:'center'}}
            >
                <Text style={{color:'steelblue'}}
                >1</Text>
                <Text
                    style={{color:'grey',fontSize:13}}
                >
                    累计签到
                </Text>
            </View>
            <View style={{justifyContent: 'center',width:'33%',alignItems:'center'}}
            >
                <Text style={{color:'steelblue'}}
                >1</Text>
                <Text
                    style={{color:'grey',fontSize:13}}
                >
                    最大连续
                </Text>
            </View>

        </View>
        <List renderHeader={'学习设置'}
              style={{marginTop:20}}
        >

            <List.Item style={{height: 30}}>
                <Text>this is an item5</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item6</Text>
            </List.Item>

        </List>
        <List renderHeader={'语料上限'}
        >
            <List.Item style={{height: 30}}>
                <Text>this is an item1</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item2</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item3</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item4</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item5</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item6</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item7</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item8</Text>
            </List.Item>
        </List>
        <List renderHeader={'学习情况'}
        >
            <List.Item style={{height: 30}}>
                <Text>this is an item1</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item2</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item3</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item4</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item5</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item6</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item7</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item8</Text>
            </List.Item>
        </List>
        <List renderHeader={'其他'}
        >
            <List.Item style={{height: 30}}>
                <Text>this is an item1</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item2</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item3</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item4</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item5</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item6</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item7</Text>
            </List.Item>
            <List.Item style={{height: 30}}>
                <Text>this is an item8</Text>
            </List.Item>
        </List>



    </ScrollView>
    </Provider>
  );
};
