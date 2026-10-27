import { StyleSheet, Text, View } from 'react-native';

export default function Favorites() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seus Favoritos Cósmicos</Text>
            <Text style={styles.description}>
                Seus meteoritos favoritos aparecerão aqui.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#060511',
    },
    title: {
        color: '#E5C158',
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        color: '#A29BB8',
        textAlign: 'center',
        marginTop: 8,
    },
});
