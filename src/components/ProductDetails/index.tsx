import { useState } from 'react';
import { Image,ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import type { ProductData } from '../../types/product';

type ProductDetailsProps = {
    product: ProductData;
};

const sizes = ['Pequeno', 'Médio', 'Grande'] as const;

export default function ProductDetails({ product }: ProductDetailsProps) {
    const [availableHeight, setAvailableHeight] = useState(0);
    const [selectedSize, setSelectedSize] =
        useState<(typeof sizes)[number]>('Médio');
    const [descriptionExpanded, setDescriptionExpanded] = useState(false);

    return (
        <View
            style={styles.container}
            onLayout={(event) => {
                const height = event.nativeEvent.layout.height;
                setAvailableHeight((current) => current === height ? current : height);
            }}
        >
            <ScrollView
                showsVerticalScrollIndicator
                persistentScrollbar={false}
                contentContainerStyle={[
                    styles.scrollContent,
                    availableHeight > 0 && (
                        descriptionExpanded
                            ? { minHeight: availableHeight }
                            : { height: availableHeight }
                    ),
                ]}
            >
                <View
                    style={[
                        styles.imageSection,
                        descriptionExpanded && { height: availableHeight * 0.45 },
                    ]}
                >
                    {product.imageUrl ? (
                        <Image
                            source={{ uri: product.imageUrl }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    ) : (
                        <Text style={styles.imagePlaceholder}>Imagem do produto</Text>
                    )}
                </View>

                <View
                    style={[
                        styles.infoRow,
                        descriptionExpanded && { height: availableHeight * 0.1 },
                    ]}
                >
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productSupport}>{product.support}</Text>
                    </View>
                    <View style={styles.rating}>
                        <FontAwesome name="star" size={25} color="#f5a623" />
                        <Text style={styles.ratingText}>{product.rating}</Text>
                    </View>
                </View>

                <View
                    style={[
                        styles.descriptionSection,
                        descriptionExpanded && {
                            height: undefined,
                            minHeight: availableHeight * 0.2,
                        },
                    ]}
                >
                    <Text
                        style={styles.descriptionText}
                        numberOfLines={descriptionExpanded ? undefined : 4}
                    >
                        {product.description}
                    </Text>
                    <TouchableOpacity
                        onPress={() => setDescriptionExpanded(!descriptionExpanded)}
                        accessibilityRole="button"
                        accessibilityLabel={
                            descriptionExpanded ? 'Ler menos' : 'Ler mais'
                        }
                    >
                        <Text style={styles.readMore}>
                            {descriptionExpanded ? 'Ler menos' : 'Ler mais'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={[
                        styles.optionsSection,
                        descriptionExpanded && { height: availableHeight * 0.15 },
                    ]}
                >
                    <Text style={styles.optionsTitle}>Escolha o tamanho</Text>
                    <View style={styles.sizeOptions}>
                        {sizes.map((size) => (
                            <TouchableOpacity
                                key={size}
                                style={[
                                    styles.sizeButton,
                                    selectedSize === size && styles.sizeButtonSelected,
                                ]}
                                onPress={() => setSelectedSize(size)}
                                accessibilityRole="button"
                                accessibilityState={{ selected: selectedSize === size }}
                            >
                                <Text
                                    style={[
                                        styles.sizeButtonText,
                                        selectedSize === size &&
                                            styles.sizeButtonTextSelected,
                                    ]}
                                >
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View
                    style={[
                        styles.buySection,
                        descriptionExpanded && { height: availableHeight * 0.12 },
                    ]}
                >
                    <Text style={styles.price}>{product.price}</Text>
                    <TouchableOpacity
                        style={styles.buyButton}
                        accessibilityRole="button"
                    >
                        <Text style={styles.buyButtonText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#030527',
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    imageSection: {
        width: '100%',
        height: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(15, 10, 31, 0.85)',
        borderRadius: 15,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'rgb(40, 2, 152)',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imagePlaceholder: {
        color: '#fff',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 15,
        backgroundColor: 'rgba(15, 10, 31, 0.85)',
        height: '10%',
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
        borderColor: 'rgb(158, 134, 0)',
        borderRadius: 8,
        backgroundColor: 'rgba(15, 10, 31, 0.85)',
    },
    sizeButtonSelected: {
        backgroundColor: '#08169a',
        borderColor: '#ffa601',
    },
    sizeButtonText: {
        color: '#fff',
        fontWeight: '600',
        height: 40,
        textAlignVertical: 'center',
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
        height: '12%',
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
        backgroundColor: '#08169a',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        borderColor: 'rgb(158, 134, 0)',
        borderWidth: 1,
    },
    buyButtonText: {
        color: '#fff',
    },
});
