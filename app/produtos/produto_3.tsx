import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';





export default function Contatos() {
    const router = useRouter();

    //MÉTODOS EXPO ROUTER
    // push - navegar para outra tela, podendo voltar
    // back - voltar para a tela anterior
    // replace - navegar para outra tela, não podendo voltar


    return (
        <View style={styles.container}>
            <View style={styles.imageSection}>
                <Image
                    source={{ uri: 'https://imgs.search.brave.com/nl34a8fa28EtfflSEqBQn6ELEJBR8NfHpvsAAIgMWnk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnVuZGFjYW9tYXRp/YXNtYWNobGluZS5v/cmcuYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDcvSU1H/XzA3MDktMzAweDIw/MC5qcGc' }}
                    style={styles.image}
                    resizeMode="cover"
                    />
             </View>

            <View style={styles.infoRow}>
                <View style={styles.productInfo}>
                    <Text style={styles.productName}>Rafael Izackson</Text>
                    <Text style={styles.productSupport}>Manaus, Amazonas, Brasil</Text>
                </View>

                <View style={styles.rating}>
                    <FontAwesome name="star" size={18} color="#f5a623" />
                    <Text>-4.8 (2,8M)</Text>
                </View>
            </View>

            <View style={styles.descriptionSection}>
                <Text>Professor de biologia, Mestre em ensino de Ciências e educação. Com mais de 15 anos de experiência em cursinhos, pré-vestibulares de Manaus.  Trabalhei com pesquisas com ênfase em microbiologia e plantas por dois anos. Atualmente trabalho na Fundação Matias Machline com mais de 10 anos de experiência nessa instituição e sou professor concursado da Seduc-AM.</Text>
            </View>

            <View style={styles.optionsSection}>
                <Text>Outras opções</Text>
            </View>

            <View style={styles.buySection}>
                <Text style={styles.price}>R$ -299,90</Text>
                <TouchableOpacity style={styles.buyButton}>
                    <Text>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    imageSection: {
        width: '100%',
        height: '38%',
        backgroundColor: '#ddd',
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#ecaeae',
    },

    productInfo: {
        flex: 1,
    },

    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    productSupport: {
        fontSize: 13,
        color: '#666',
        marginTop: 4,
    },

    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },

    descriptionSection: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor:"#67f10a",
    },

    optionsSection: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor:"#cef10a",
    },

    buySection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#111111',
        backgroundColor:"#f1c70a",
    },

    price: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    buyButton: {
        backgroundColor: '#007BFF',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },

    image: {
        width: '100%',
        height: '100%',
    },
})