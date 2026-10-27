import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil do Observatório</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#060511',
    },
    title: {
        color: '#E5C158',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
