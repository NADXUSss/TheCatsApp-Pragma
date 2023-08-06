import { useEffect, useState } from "react";
import React from 'react';
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ViewModelCat } from "../view-model-cat";

let modelClass = new ViewModelCat();
export default function CatComponent() {
    const [catsInfo, setcatsInfo] = useState<any>([])

    useEffect(() => {
        /* modelClass.getCats().then((result) => { setcatsInfo(result) }).catch((err) => {
            Alert.alert("Error", err)
        }); */
        modelClass.getCats(setcatsInfo)
        // setcatsInfo(modelClass.cats)
    }, [])

    return (
        <View style={styles.content}>
            <View style={styles.title}>
                <Text style={styles.text}>Catbreads</Text>
            </View>

            <ScrollView style={{
                paddingVertical: 15,
                height: Dimensions.get("window").height - 150
            }}>
                {catsInfo[0] ? catsInfo.map((cat: any) => {
                    return <View key={cat.id} style={styles.viewCats}>
                        <Text style={styles.catName}>Raza: {cat.name}</Text>
                        <View>
                            <Image source={{ uri: cat.image }} style={styles.catImage} />
                        </View>
                        <View>
                            <Text style={styles.catOrigin}>Pais de origen: {cat.origin}</Text>
                            <Text style={styles.catIntelligence}>Inteligencia: {cat.intelligence}</Text>
                        </View>
                    </View>
                }) : <></>}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 40,
        width: "100%",
    },
    title: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        alignItems: "center",
    },
    text: { fontSize: 30, marginBottom: 20 },
    viewCats: {
        backgroundColor: "white",
        padding: 20,
        paddingHorizontal: 50,
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 4.65,

        elevation: 7,
    },
    catName: { fontSize: 25, marginVertical: 20 },
    catImage: { width: "100%", height: 200, objectFit: "cover", borderRadius: 10, },
    catOrigin: { fontSize: 20, marginTop: 20 },
    catIntelligence: { fontSize: 20, marginBottom: 20, opacity: 0.5 }
})