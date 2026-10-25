import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';



export default function Contatos() {
    const [areaDisponivel, setAreaDisponivel] = useState(0);
    const [tamanho, setTamanho] = useState<'Pequeno' | 'Médio' | 'Grande'>('Médio');
    const [descricaoExpandida, setDescricaoExpandida] = useState(false);

    //MÉTODOS EXPO ROUTER
    // push - navegar para outra tela, podendo voltar
    // back - voltar para a tela anterior
    // replace - navegar para outra tela, não podendo voltar


    return (
        <View
            style={styles.container}
            onLayout={(event) => {
                const altura = event.nativeEvent.layout.height;
                setAreaDisponivel((atual) => atual === altura ? atual : altura);
            }}
        >
            <ScrollView
                showsVerticalScrollIndicator
                persistentScrollbar={false}
                contentContainerStyle={[
                    styles.scrollContent,
                    areaDisponivel > 0 && (
                        descricaoExpandida
                            ? { minHeight: areaDisponivel }
                            : { height: areaDisponivel }
                    ),
                ]}
            >
                <View
                    style={[
                        styles.imageSection,
                        descricaoExpandida && { height: areaDisponivel * 0.45 },
                    ]}
                >
                    <Image
                        source={{ uri: 'https://www.fundacaomatiasmachline.org.br/wp-content/uploads/2020/07/IMG_0709-300x200.jpg' }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>

                <View
                    style={[
                        styles.infoRow,
                        descricaoExpandida && { height: areaDisponivel * 0.1 },
                    ]}
                >
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>Rafael Izackson</Text>
                        <Text style={styles.productSupport}>Manaus, Amazonas, Brasil</Text>
                    </View>

                    <View style={styles.rating}>
                        <FontAwesome name="star" size={25} color="#f5a623" />
                        <Text style={styles.ratingText}>-4.8 (2,8M)</Text>
                    </View>
                </View>

                <View
                    style={[
                        styles.descriptionSection,
                        descricaoExpandida && {
                            height: undefined,
                            minHeight: areaDisponivel * 0.2,
                        },
                    ]}
                >
                    <Text
                        style={styles.descriptionText}
                        numberOfLines={descricaoExpandida ? undefined : 4}
                    >
                        Professor de biologia, Mestre em ensino de Ciências e educação. Com mais de 15 anos de experiência em cursinhos, pré-vestibulares de Manaus. Trabalhei com pesquisas com ênfase em microbiologia e plantas por dois anos. Atualmente trabalho na Fundação Matias Machline com mais de 10 anos de experiência nessa instituição e sou professor concursado da Seduc-AM.
                    </Text>
                    <TouchableOpacity
                        onPress={() => setDescricaoExpandida(!descricaoExpandida)}
                        accessibilityRole="button"
                    >
                        <Text style={styles.readMore}>
                            {descricaoExpandida ? 'Ler menos' : 'Ler mais'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={[
                        styles.optionsSection,
                        descricaoExpandida && { height: areaDisponivel * 0.15 },
                    ]}
                >
                    <Text style={styles.optionsTitle}>Escolha o tamanho</Text>
                    <View style={styles.sizeOptions}>
                        {(['Pequeno', 'Médio', 'Grande'] as const).map((opcao) => (
                            <TouchableOpacity
                                key={opcao}
                                style={[
                                    styles.sizeButton,
                                    tamanho === opcao && styles.sizeButtonSelected,
                                ]}
                                onPress={() => setTamanho(opcao)}
                            >
                                <Text
                                    style={[
                                        styles.sizeButtonText,
                                        tamanho === opcao && styles.sizeButtonTextSelected,
                                    ]}
                                >
                                    {opcao}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View
                    style={[
                        styles.buySection,
                        descricaoExpandida && { height: areaDisponivel * 0.1 },
                    ]}
                >
                    <Text style={styles.price}>R$ -299,90</Text>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text style={styles.buyButtonText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#030527',
    },

    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 5,
    },

    imageSection: {
        width: '100%',
        height: '45%',
        backgroundColor: 'rgba(15, 10, 31, 0.85)',
        borderRadius: 15,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'rgb(40, 2, 152)',
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 15,
        backgroundColor: 'rgba(15, 10, 31, 0.85)',
        height: '10%',
        // width:'90%',
        marginTop: 5,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'rgb(40, 2, 152)',
    },

    productInfo: {
        flex: 1,
    },

    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
    },

    productSupport: {
        fontSize: 13,
        color: '#fff',
        marginTop: 10,
    },

    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },

    ratingText: {
        color: '#fff',
    },

    descriptionSection: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: 'rgba(15, 10, 31, 0.85)',
        height: '15%',
        marginTop: 5,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'rgb(40, 2, 152)',
    },

    descriptionText: {
        color: '#fff',
    },

    readMore: {
        color: '#fff',
        fontWeight: 'bold',
        // marginTop: 0,
    },

    optionsSection: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: 'rgba(15, 10, 31, 0.85)',
        height: '15%',
        marginTop: 5,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'rgb(40, 2, 152)',
    },

    optionsTitle: {
        color: '#fff',
    },

    sizeOptions: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 12,
    },

    sizeButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.65)',
        borderRadius: 8,
        backgroundColor: 'rgba(15, 10, 31, 0.85)',
    },

    sizeButtonSelected: {
        backgroundColor: '#001aff',
        borderColor: '#ffffff',
    },

    sizeButtonText: {
        color: '#fff',
        fontWeight: '600',
    },

    sizeButtonTextSelected: {
        color: '#fff',
    },

    buySection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: 'rgba(15, 10, 31, 0.85)',
        height: '15%',
        marginTop: 5,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'rgb(40, 2, 152)',
    },

    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },

    buyButton: {
        backgroundColor: '#007BFF',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },

    buyButtonText: {
        color: '#fff',
    },

    image: {
        width: '100%',
        height: '100%',
    },
})