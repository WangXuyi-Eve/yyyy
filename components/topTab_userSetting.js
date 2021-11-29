import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import {Hello} from '../View/hello'
import {UserInfoSetting} from '../View/UserInfoSetting'

class UserTab extends React.Component {
    render() {
        const tabs = [
            { title: '我的设置' },
            { title: '修改资料' },
        ];


        return (
            <View style={{ flex: 1 }}>
                <Tabs tabs={tabs}
                >
                    <ScrollView >
                        <Hello/>
                    </ScrollView>
                    <ScrollView>
                        <UserInfoSetting/>
                    </ScrollView>

                </Tabs>

            </View>
        );
    }
}
export default UserTab;
export const title = 'Tabs';
export const description = 'Tabs example';
