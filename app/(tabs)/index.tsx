import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {

    //MÉTODOS EXPO ROUTER
    // push - navegar para outra tela, podendo voltar
    // back - voltar para a tela anterior
    // replace - navegar para outra tela, não podendo voltar
    const router = useRouter();




    return (
        <View style={styles.container}>
            <Text style={styles.title}>Index do Tabs</Text>

            {/* inicio do Botão para navegar para a página "Index" */}
            <TouchableOpacity
                style={styles.botao}
                onPress={()=>router.push("/contatos")}
            >
                {/* <a href="/">Index</a> */}
                <Text>Ir para contatos</Text>
            </TouchableOpacity>
            {/* fim do Botão para navegar para a página "Index" */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Cor de fundo clara
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