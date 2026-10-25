import React from 'react';
import { TouchableOpacity, Text, StyleSheet, type TouchableOpacityProps } from 'react-native';

type PropsButton = {
    title: string;
    onPress: TouchableOpacityProps['onPress'],
};

const Button = ({ onPress, title }: PropsButton) => (
    <TouchableOpacity
        onPress={onPress}
        style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#9fc131',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Button;