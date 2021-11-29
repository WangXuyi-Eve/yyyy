import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import {Learning} from '../View/learning'
import {Pure} from '../View/pure'


class BasicTab extends React.Component {
    render() {
        const tabs = [
            { title: '语篇阅读' },
            { title: '核心词句' },
        ];

        // const style = {
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     backgroundColor: '#fff',
        // };

        return (
            <View style={{ flex: 1 }}>
                <Tabs tabs={tabs}>
                    <ScrollView >
                        <Pure/>
                    </ScrollView>
                    <ScrollView>
                        <Learning/>
                    </ScrollView>

                </Tabs>

            </View>
        );
    }
}
export default BasicTab;
export const title = 'Tabs';
export const description = 'Tabs example';
