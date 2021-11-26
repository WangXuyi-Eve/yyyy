import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import Pagex from '../View/explanation'
import Page from '../View/writing'

export default class BasicTabs extends React.Component {
    render() {
        const tabs = [
            { title: '应用语库' },
            { title: '实战造句' },
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
                        <Page/>
                    </ScrollView>
                    <ScrollView>
                        <Pagex/>
                    </ScrollView>

                </Tabs>

            </View>
        );
    }
}
export const title = 'Tabs';
export const description = 'Tabs example';
