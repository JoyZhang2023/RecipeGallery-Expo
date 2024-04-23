import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import React, {useState} from "react";
import {images} from './imageList';

export default function Gallery({RecipeList}) {
    const [index, setIndex] = useState(0);

    const handlePrevClick = () => {
        if (index > 0 && index < images.length) {
            setIndex(index-1);
        }else if (index === 0){
            alert("This is the first page.");
        }
    };

    const handleNextClick = () => {
        if (index >= 0 && index < images.length-1) {
            setIndex(index+1);
        }else if (index === images.length-1){
            alert("This is the last page.");
        }
    };


    var imageUrl = images[index].url;
    var imageDescription = images[index].description;

    

    return (
        <View >
            <Pressable style={styles.button} onPress={handlePrevClick}>
                <Text style={styles.buttonlabel}>Previous</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleNextClick}>
                <Text style={styles.buttonlabel}>Next</Text>
            </Pressable>
            <Text>{imageUrl}</Text>
            <Text>{imageDescription}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 4,
      height: 4,
      marginHorizontal: 20,
      padding: 3,
    },
    button: {                    
      borderRadius: 20,
      width: 250,
      height: 25,
      marginBottom: 20,
      alignItems:'center',
      justifyContent:'center',
      flexDirection: 'row',
      backgroundColor: '#cccc',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#cccccc',
      fontSize: 16,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
  });