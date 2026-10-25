import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Contatos() {
    const router = useRouter();

    //MÉTODOS EXPO ROUTER
    // push - navegar para outra tela, podendo voltar
    // back - voltar para a tela anterior
    // replace - navegar para outra tela, não podendo voltar


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contatos do Tabs</Text>

            <TouchableOpacity 
            style={styles.botao}
            onPress={()=> router.push("/auth/login")}>
                <Text>Ir para Login</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Cor de fundo clara
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    botao: {
        backgroundColor: '#007BFF', // Cor de fundo do botão
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
});