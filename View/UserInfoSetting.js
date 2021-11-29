import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import { List, SearchBar, TabBar, Provider } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export const UserInfoSetting = () => {
    const id = "1234567";
    const gender = "喵星人";
    const loca = "未填写";
    const birthday = "未填写";
    const school = "未填写";
    const conste = "未填写";
    return(
        <Provider>
            {/*<View*/}
            {/*    style={{height:40,backgroundColor:'whitesmoke',flexDirection:"row"}}*/}
            {/*>*/}
            {/*    <View*/}
            {/*        style={{width:"15%",alignItems:"center", justifyContent: 'center'}}*/}
            {/*    >*/}
            {/*        <Icon style={{color:'steelblue'}} name={'left'} size={17}/>*/}
            {/*    </View>*/}
            {/*    <View*/}
            {/*        style={{width:"70%",alignItems:"center", justifyContent: 'center'}}*/}
            {/*    >*/}
            {/*        <Text*/}
            {/*            style={{color:'steelblue',fontSize:15}}*/}
            {/*        >*/}
            {/*        个人资料*/}
            {/*        </Text>*/}
            {/*    </View>*/}
            {/*    <View*/}
            {/*        style={{width:"15%",alignItems:"center",justifyContent: 'center'}}*/}
            {/*    >*/}
            {/*        <Text*/}
            {/*            style={{color:'darkslategrey'}}>*/}

            {/*        </Text>*/}
            {/*    </View>*/}
            {/*</View>*/}
            <ScrollView>
                <View style={{height:13,backgroundColor:'whitesmoke'}}>
                    <Text> </Text>
                </View>
                <List>
                    <List.Item style={{height: 100}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>头像</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Image
                                    source={{
                                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                                    }}
                                    style={{ width: 80, height: 80, marginTop:13 }}
                                />
                            </View>

                            <View
                                style={{width:'15%',alignItems: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                    <List.Item style={{height: 50 ,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>ID</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Text style={{color:'grey'}}>{id}</Text>
                            </View>
                            <View style={{width:"15%"}}>
                                <Text></Text>
                            </View>
                        </View>
                    </List.Item>
                    <List.Item style={{height: 50,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>等级</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Text style={{color:'grey'}}>LVL 9</Text>
                            </View>
                            <View
                                style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                    <List.Item style={{height: 50,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>昵称</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Text style={{color:'grey'}}>流泪猫猫头（点击编辑）</Text>
                            </View>
                            <View
                                style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                    <List.Item style={{height: 50,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>签名</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Text style={{color:'grey'}}>没有辛苦的工作，只有流泪的猫猫</Text>
                            </View>
                            <View
                                style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                </List>
                <List>
                    <View style={{height:13,backgroundColor:'whitesmoke'}}>
                        <Text> </Text>
                    </View>
                    <List.Item style={{height: 50 ,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>邮箱</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Text style={{color:'darkred'}}>未绑定</Text>
                            </View>
                            <View style={{width:"15%"}}>
                                <Text></Text>
                            </View>
                        </View>
                    </List.Item>
                    <List.Item style={{height: 50,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>手机</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Text style={{color:'grey'}}>12345678909</Text>
                            </View>
                            <View
                                style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                    <List.Item style={{height: 50,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>微信</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Text style={{color:'grey'}}>猫猫头没有微信</Text>
                            </View>
                            <View
                                style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                    <List.Item style={{height: 50,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>性别</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Text style={{color:'grey'}}>{gender}</Text>
                            </View>
                            <View
                                style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                    <List.Item style={{height: 50,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>地区</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Text style={{color:'grey'}}>{loca}</Text>
                            </View>
                            <View
                                style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                    <List.Item style={{height: 50,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>生日</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Text style={{color:'grey'}}>{birthday}</Text>
                            </View>
                            <View
                                style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                    <List.Item style={{height: 50,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>学校</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Text style={{color:'grey'}}>{school}</Text>
                            </View>
                            <View
                                style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                    <List.Item style={{height: 50,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"15%"}}>
                                <Text style={{color:'black'}}>星座</Text>
                            </View>
                            <View style={{width:"70%"}}>
                                <Text style={{color:'grey'}}>{conste}</Text>
                            </View>
                            <View
                                style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                </List>
                <List>
                    <View style={{height:13,backgroundColor:'whitesmoke'}}>
                        <Text> </Text>
                    </View>
                    <List.Item style={{height: 50,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"30%"}}>
                                <Text style={{color:'black'}}>修改密码</Text>
                            </View>
                            <View style={{width:"55%"}}>
                                <Text style={{color:'grey'}}></Text>
                            </View>
                            <View
                                style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                    <List.Item style={{height: 50,justifyContent: 'center'}}>
                        <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{width:"30%"}}>
                                <Text style={{color:'black'}}>退出登录</Text>
                            </View>
                            <View style={{width:"55%"}}>
                                <Text style={{color:'grey'}}></Text>
                            </View>
                            <View
                                style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                            >
                                <Icon name={"right"} style={{color: "grey"}} size={15}/>
                            </View>
                        </View>
                    </List.Item>
                </List>
            </ScrollView>
        </Provider>
    );
};
