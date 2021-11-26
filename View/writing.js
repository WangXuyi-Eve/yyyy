import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, TextInput } from "react-native";

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

const writing = () => {
    return(
        <Text style = {styles.writing_text}>
            {"The increasing rate of mental illness in adolescents should be put in the context of "}
            <Text style = {styles.writing_emp}>
                {"in the context of "}
            </Text>
            <Text style = {styles.writing_wrong}>
                {"domestic environment"}
            </Text>
            {", academic pressure and peer competition."}
        </Text>
    )
}

const use_of_the_word = () => {
    return(
        <Text style = {styles.use_of_the_word_text}>
            {"Use of the word: "}
            {"Yes"}
        </Text>
    )
}

const grammar = () => {
    return(
        <Text style = {styles.grammar_text}>
            {"Grammar: "}
            {"\"the\" domestic environment"}
        </Text>
    )
}

const grade = () => {
    return(
        <Text style = {styles.grade_text}>
            {"My grade: "}
            {"90"}
        </Text>
    )
}

const more = () => {
    return(
        <Text style = {styles.more_text}>
            {"More about my writing\n"}
            {"Recommend my sentence\n"}
            {"See how others do"}
        </Text>
    )
}

const Page = () => {
    return(

        <SafeAreaView style = {styles.container}>
            <ScrollView style = {styles.scroll}>
                <View style = {styles.word_box}>
                    {word()}
                </View>
                <View style = {styles.example_box}>
                    {example()}
                </View>
                <View style = {styles.writing_box}>
                    {writing()}
                </View>
                <View style = {styles.other_box}>
                    {use_of_the_word()}
                </View>
                <View style = {styles.other_box}>
                    {grammar()}
                </View>
                <View style = {styles.other_box}>
                    {grade()}
                </View>
                <View style = {styles.more_box}>
                    {more()}
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
        paddingBottom: 8,
        backgroundColor: 'white'
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
        paddingHorizontal: 14,
        marginBottom: 6
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
    writing_box: {
        paddingHorizontal: 14,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: "white",
        marginBottom: 20
    },
    writing_text: {
        color: "black",
        fontSize: 15,
        lineHeight: 40
    },
    writing_emp: {
        color: "green",
        fontSize: 15
    },
    writing_wrong: {
        color: "red",
        fontSize: 15
    },
    other_box: {
        paddingHorizontal: 14
    },
    use_of_the_word_text: {
        color: "darkgreen",
        fontSize: 15,
        lineHeight: 40
    },
    grammar_text: {
        color: "red",
        fontSize: 15,
        lineHeight: 40
    },
    grade_text: {
        color: "darkblue",
        fontSize: 15,
        lineHeight: 40
    },
    more_box: {
        marginTop: 20,
        paddingHorizontal: 14
    },
    more_text: {
        color: "black",
        fontSize: 15,
        lineHeight: 40,
        textDecorationLine: 'underline'
    }
});

export default Page;
