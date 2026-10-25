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
            <View style={styles.produtos}>

            {/* 8 PRODUTOS */}
            <TouchableOpacity
                style={styles.botao}
                onPress={()=>router.push("/produtos/produto_1")}
            >
                {/* <a href="/">Index</a> */}
                <Text>primeiro produto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={()=>router.push("/produtos/produto_2")}
            >
                {/* <a href="/">Index</a> */}
                <Text>segundo produto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={()=>router.push("/produtos/produto_3")}
            >
                {/* <a href="/">Index</a> */}
                <Text>terceiro produto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={()=>router.push("/produtos/produto_4")}
            >
                {/* <a href="/">Index</a> */}
                <Text>quarto produto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={()=>router.push("/produtos/produto_5")}
            >
                {/* <a href="/">Index</a> */}
                <Text>quinto produto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={()=>router.push("/produtos/produto_6")}
            >
                {/* <a href="/">Index</a> */}
                <Text>sexto produto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={()=>router.push("/produtos/produto_7")}
            >
                {/* <a href="/">Index</a> */}
                <Text>sétimo produto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={()=>router.push("/produtos/produto_8")}
            >
                {/* <a href="/">Index</a> */}
                <Text>oitavo produto</Text>
            </TouchableOpacity>
            {/* Fim dos 8 PRODUTOS */}

            </View>

            {/* inicio do Botão para navegar para a página "Index" */}
            {/* <TouchableOpacity */}
                {/* // style={styles.botao} */}
                {/* // onPress={()=>router.push("/contatos")} */}
            {/* // > */}
                {/* <a href="/">Index</a> */}
                {/* <Text>Ir para contatos</Text> */}
            {/* </TouchableOpacity> */}
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
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    botao: {
        backgroundColor: '#007BFF', // Cor de fundo do botão
        paddingHorizontal: 10,
        paddingVertical:  10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: '40%',
    },

    produtos: {
        backgroundColor: '#4bda2f', // Cor de fundo do botão
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        flexWrap:'wrap',
        gap: 40,
    },
});