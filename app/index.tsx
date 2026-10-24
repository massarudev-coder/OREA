import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {

    //MÉTODOS EXPO ROUTER
    // push - navegar para outra tela, podendo voltar
    // back - voltar para a tela anterior (o empilhamento de telas é feito automaticamente pelo expo, como um "histórico")
    // replace - navegar para outra tela, não podendo voltar
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Inicio do aplicativo!
            </Text>

            {/* Inicio da navegação para as abas */}
            <TouchableOpacity
                style={styles.botao}
                onPress={() => router.push("/(tabs)")}
            >
                <Text>Ir para Tabs</Text>
            </TouchableOpacity>
            {/* Fim da navegação para as abas */}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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