import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    ScrollView,
} from "react-native";

const date = () => {
    return <Text style={styles.date_text}>{"2021.12.12 Monday  "}</Text>;
};

const topic = () => {
    return <Text style={styles.topic}>{"Topic: Multiculturalism "}</Text>;
};

const passage1 = () => {
    return (
        <Text style={styles.passage1}>
            <Text style={styles.topic_empha}>{"   Multiculturalism"}</Text>
            {" (cultural pluralism) refers to a mix of cultures and"}

            <Text style={styles.word_empha}>{" ethnicities"}</Text>

            {
                " within a particular place or nation-state. It can be understood as another way of speaking about multi-ethnic states, but also refers to govern- ment policies, particularly "
            }

            <Text style={styles.more_empha}>{"with respect to"}</Text>

            {" immigration. "}
        </Text>
    );
};

const passage2 = () => {
    return (
        <Text style={styles.passage2}>
            {"   Given that populations are "}
            <Text style={styles.word_empha}>{"arguably"}</Text>

            {" more mobile now, multiculturalism continues to be an issue"}
            <Text style={styles.more_empha}>{" in the context of"}</Text>

            {" education, social "}

            <Text style={styles.word_empha}>{"cohesion "}</Text>
            {"and social welfare systems. "}
        </Text>
    );
};

const passage3 = () => {
    return (
        <Text style={styles.passage3}>
            {
                "   Two phrases are often used to describe the United States of America as a multi-ethnic state. One is "
            }
            <Text style={styles.topic_empha}>{"'melting pot'"}</Text>
            {"and the other"}

            <Text style={styles.topic_empha}>{"'salad bowl.'"}</Text>
        </Text>
    );
};

const Voca = () => {
    return (
        <Text style={styles.passage1}>
            <Text style={styles.word_empha}>{"Vocabulary: "}</Text>
            {"ethnicity, arguably, cohension"}
        </Text>
    );
};

const Phra = () => {
    return (
        <Text style={styles.passage1}>
            <Text style={styles.pha_empha}>{"Phrases: "}</Text>
            {"with respect to, in the context of"}
        </Text>
    );
};

const Ter = () => {
    return (
        <Text style={styles.passage1}>
            <Text style={styles.topic_empha}>{"Terminology: "}</Text>
            {"multiculturation, melting pot, salad bowl"}
        </Text>
    );
};

export const Learning = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.date_box}>{date()}</View>
                <View style={styles.topic_box}>{topic()}</View>
                <View style={styles.passage_box}>{passage1()}</View>
                <View style={styles.passage_box}>{passage2()}</View>
                <View style={styles.passage_box}>{passage3()}</View>
                <View style={styles.passage_box2}>{Voca()}</View>
                <View style={styles.passage_box2}>{Phra()}</View>
                <View style={styles.passage_box2}>{Ter()}</View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        backgroundColor: "whitesmoke",
    },
    date_box: {
        backgroundColor:"white",
        paddingHorizontal: 14,
        paddingTop: 8,
        paddingBottom: 8,
    },
    date_text: {
        color: "steelblue",
        fontSize: 20,
    },
    topic: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
    },
    topic_box: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingHorizontal: 14,
        backgroundColor:"white",
    },
    passage1: {
        color: "black",
        fontSize: 15,
        lineHeight: 40,
    },
    passage_box: {
        backgroundColor: "aliceblue",
        paddingTop: 3,
        paddingBottom: 3,
        paddingHorizontal: 14,
    },
    passage_box2: {
        backgroundColor: "white",
        paddingTop: 3,
        paddingBottom: 3,
        paddingHorizontal: 14,
    },
    passage2: {
        color: "black",
        fontSize: 15,
        lineHeight: 40,
    },
    passage3: {
        color: "black",
        fontSize: 15,
        lineHeight: 40,
    },
    topic_empha: {
        color: "darkblue",
        fontSize: 15,
        lineHeight: 40,
    },
    word_empha: {
        color: "red",
        fontSize: 15,
        lineHeight: 40,
    },
    more_empha: {
        color: "green",
        fontSize: 15,
        lineHeight: 40,
    },
    pha_empha: {
        color: "green",
        fontSize: 15,
        lineHeight: 40,
    },
});

