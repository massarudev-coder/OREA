import { StyleSheet, Text, View } from 'react-native';

export default function Cart() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seu Carrinho de Meteoritos</Text>
            <Text style={styles.description}>
                Os itens adicionados ao carrinho aparecerão aqui.
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
