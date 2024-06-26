import {StyleSheet, Image } from 'react-native';

export default function ImageViewer ({placeholderImageSource}) {
    return (
        <Image source={placeholderImageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        top: 30,
        marginLeft:30,
        width: 100,
        height: 100,
        borderRadius: 18,
        alignItems: 'center',

    },
});