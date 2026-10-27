import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import type { ProductData } from '../../types/product';

const colors = {
    background: '#060511',
    panel: 'rgba(28, 16, 51, 0.75)',
    input: 'rgba(15, 10, 31, 0.85)',
    gold: '#E5C158',
    muted: '#A29BB8',
    text: '#F5F1FF',
    border: 'rgba(229, 193, 88, 0.22)',
};

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
                        <FontAwesome name="star" size={20} color={colors.gold} />
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
                    <Text style={styles.price}>
                        $ {product.price.toFixed(2)}
                    </Text>
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
        backgroundColor: colors.background,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    imageSection: {
        width: '100%',
        height: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.panel,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.border,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imagePlaceholder: {
        color: colors.muted,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 14,
        backgroundColor: colors.panel,
        height: '10%',
        marginTop: 10,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: colors.border,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 19,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: colors.text,
    },
    productSupport: {
        fontSize: 13,
        color: colors.muted,
        marginTop: 6,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    ratingText: {
        color: colors.text,
    },
    descriptionSection: {
        paddingHorizontal: 18,
        paddingVertical: 14,
        backgroundColor: colors.panel,
        height: '15%',
        marginTop: 10,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: colors.border,
    },
    descriptionText: {
        color: colors.text,
        lineHeight: 21,
    },
    readMore: {
        color: colors.gold,
        fontWeight: 'bold',
        marginTop: 5,
    },
    optionsSection: {
        paddingHorizontal: 18,
        paddingVertical: 14,
        backgroundColor: colors.panel,
        height: '15%',
        marginTop: 10,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: colors.border,
    },
    optionsTitle: {
        color: colors.text,
        fontWeight: '600',
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
        borderColor: 'rgba(229, 193, 88, 0.45)',
        borderRadius: 12,
        backgroundColor: colors.input,
    },
    sizeButtonSelected: {
        backgroundColor: colors.gold,
        borderColor: colors.gold,
    },
    sizeButtonText: {
        color: colors.text,
        fontWeight: '600',
        height: 36,
        textAlignVertical: 'center',
    },
    sizeButtonTextSelected: {
        color: colors.background,
    },
    buySection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 14,
        backgroundColor: colors.panel,
        height: '12%',
        marginTop: 10,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: colors.border,
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
    },
    buyButton: {
        backgroundColor: colors.gold,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 12,
    },
    buyButtonText: {
        color: colors.background,
        fontWeight: '700',
    },
});
