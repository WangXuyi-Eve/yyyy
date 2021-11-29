import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from "react-native";

const word = () => {
    return(
        <Text style = {styles.word_text}>
            {"Context  "}
            <Text style = {styles.word_explanation}>
                {"n. 环境、上下文、来龙去脉"}
            </Text>
        </Text>
    )
}

const example = () => {
    return(
        <Text style = {styles.example_sentence}>
            {"Multiculturalism continues to be an issue "}
            <Text style = {styles.example_empha}>
                {"in the context of "}
            </Text>
            {"education, social cohesion and social welfate systems."}
        </Text>
    )
}

const more1 = () => {
    return(
        <Text style = {styles.more_sentence}>
            {'1. '}
            {"The reality is that unless it is addressed "}
            <Text style = {styles.more_empha}>
                {"in the context of "}
            </Text>
            {"environmental issues, the economic sustainability and soundness of alternative contexts will become irrelevant."}
        </Text>
    )
}

const more2 = () => {
    return(
        <Text style = {styles.more_sentence}>
            {'2. '}
            {"I am among many who have chosen to practice "}
            <Text style = {styles.more_empha}>
                {"in the context of "}
            </Text>
            {"a life of live and work and play in modern middle class America."}
        </Text>
    )
}

const more3 = () => {
    return(
        <Text style = {styles.more_sentence}>
            {'3. '}
            {"Cause and effect are hard to figure "}
            <Text style = {styles.more_empha}>
                {"in the context of "}
            </Text>
            {"raising kids."}
        </Text>
    )
}

const getMore = () => {
    return(
        <Text style = {styles.getMore_text}>
            {"More Sentences"}
        </Text>
    )
}

const Pagex = () => {
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.word_box}>
                {word()}
            </View>
            <ScrollView style = {styles.scroll}>
                <View style = {styles.example_box}>
                    {example()}
                </View>
                <View style = {styles.more_box}>
                    {more1()}
                </View>
                <View style = {styles.more_box}>
                    {more2()}
                </View>
                <View style = {styles.more_box}>
                    {more3()}
                </View>
                <View style = {styles.getMore_box}>
                    {getMore()}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scroll: {
        backgroundColor: 'whitesmoke'
    },
    word_box: {
        paddingHorizontal: 14,
        paddingTop: 8,
        paddingBottom: 8
    },
    word_text: {
        color: 'darkblue',
        fontSize: 20
    },
    word_explanation: {
        color: 'black',
        fontSize: 15
    },
    example_box: {
        backgroundColor: 'aliceblue',
        paddingTop: 8,
        paddingBottom: 8,
        paddingHorizontal: 14
    },
    example_sentence: {
        color: 'black',
        fontSize: 15,
        lineHeight: 40
    },
    example_empha: {
        color: 'red',
        fontSize: 15,
        lineHeight: 40
    },
    more_box: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingHorizontal: 14
    },
    more_sentence: {
        color: 'darkblue',
        fontSize: 15,
        lineHeight: 35,
    },
    more_empha: {
        color: 'darkorange',
        fontSize: 15,
        lineHeight: 35,
    },
    getMore_box: {
        paddingTop: 16,
        paddingBottom: 8,
        paddingHorizontal: 14
    },
    getMore_text: {
        color: 'blue',
        fontSize: 15,
        lineHeight: 40,
        textDecorationLine: 'underline',
    }
});

export default Pagex;
