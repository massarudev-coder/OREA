import { useMemo, useState } from 'react';
import {
    Alert,
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { catalogProducts } from '../../src/data/products';
import type { ProductCategory } from '../../src/types/product';

type CategoryFilter = 'Todos' | ProductCategory;

const categories: CategoryFilter[] = [
    'Todos',
    'Sideritos',
    'Palasitos',
    'Moldavitas',
    'Marcianos',
    'Lunares',
];

export default function StoreHome() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] =
        useState<CategoryFilter>('Todos');

    const filteredProducts = useMemo(() => {
        const normalizedSearch = search.trim().toLocaleLowerCase();

        return catalogProducts.filter((product) => {
            const matchesSearch =
                product.name.toLocaleLowerCase().includes(normalizedSearch) ||
                product.support.toLocaleLowerCase().includes(normalizedSearch);
            const matchesCategory =
                activeCategory === 'Todos' || product.category === activeCategory;

            return matchesSearch && matchesCategory;
        });
    }, [activeCategory, search]);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar barStyle="light-content" />

            <View style={styles.topHeader}>
                <View style={styles.brandRow}>
                    <Text style={styles.brandText}>OREA</Text>
                    <Text style={styles.brandSubText}>COSMIC VAULT</Text>
                </View>

                <View style={styles.locationRow}>
                    <View>
                        <Text style={styles.locationLabel}>Localização</Text>
                        <View style={styles.locationSelector}>
                            <Text style={styles.locationText}>Observatório Starlight</Text>
                            <Text style={styles.arrowDown}> ∨</Text>
                        </View>
                    </View>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
                            }}
                            style={styles.avatarImage}
                        />
                    </View>
                </View>

                <View style={styles.searchRow}>
                    <View style={styles.searchBox}>
                        <Text style={styles.searchIcon}>⌕</Text>
                        <TextInput
                            accessibilityLabel="Buscar meteoritos"
                            style={styles.searchInput}
                            placeholder="Buscar meu produto cósmico..."
                            placeholderTextColor="#7E7B9A"
                            value={search}
                            onChangeText={setSearch}
                        />
                    </View>
                    <View style={styles.filterButton}>
                        <Text style={styles.filterIcon}>⋯</Text>
                    </View>
                </View>
            </View>

            <View style={styles.categoriesWrapper}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {categories.map((category) => {
                        const isActive = activeCategory === category;

                        return (
                            <Pressable
                                key={category}
                                style={[
                                    styles.categoryChip,
                                    isActive && styles.categoryChipActive,
                                ]}
                                onPress={() => setActiveCategory(category)}
                                accessibilityRole="button"
                                accessibilityState={{ selected: isActive }}
                            >
                                <Text
                                    style={[
                                        styles.categoryText,
                                        isActive && styles.categoryTextActive,
                                    ]}
                                >
                                    {category}
                                </Text>
                            </Pressable>
                        );
                    })}
                </ScrollView>
            </View>

            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text style={styles.emptyMessage}>
                        Nenhum meteorito encontrado.
                    </Text>
                }
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Pressable
                            onPress={() => router.push(item.detailRoute)}
                            accessibilityRole="button"
                            accessibilityLabel={`Ver detalhes de ${item.name}`}
                        >
                            <View style={styles.imageBox}>
                                <Image
                                    source={{ uri: item.imageUrl }}
                                    style={styles.cardImage}
                                    resizeMode="cover"
                                />
                                <View style={styles.ratingBadge}>
                                    <Text style={styles.starIcon}>★</Text>
                                    <Text style={styles.ratingText}>{item.rating}</Text>
                                </View>
                            </View>

                            <Text style={styles.cardTitle} numberOfLines={1}>
                                {item.name}
                            </Text>
                            <Text style={styles.cardSubtitle} numberOfLines={1}>
                                {item.support}
                            </Text>
                        </Pressable>

                        <View style={styles.cardFooter}>
                            <Text style={styles.price}>
                                $ {item.price.toFixed(2)}
                            </Text>
                            <Pressable
                                style={styles.plusButton}
                                onPress={() =>
                                    Alert.alert(
                                        'OREA',
                                        `Adicionado: ${item.name}`,
                                    )
                                }
                                accessibilityRole="button"
                                accessibilityLabel={`Adicionar ${item.name} ao carrinho`}
                            >
                                <Text style={styles.plusText}>+</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#060511',
    },
    topHeader: {
        backgroundColor: 'rgba(28, 16, 51, 0.75)',
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 20,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        borderWidth: 1,
        borderColor: 'rgba(229, 193, 88, 0.25)',
    },
    brandRow: {
        alignItems: 'center',
        marginBottom: 12,
    },
    brandText: {
        color: '#E5C158',
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 3,
    },
    brandSubText: {
        color: '#A29BB8',
        fontSize: 9,
        letterSpacing: 2,
        marginTop: 2,
    },
    locationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    locationLabel: {
        color: '#7E7B9A',
        fontSize: 11,
    },
    locationSelector: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        color: '#F0ECFC',
        fontSize: 13,
        fontWeight: 'bold',
    },
    arrowDown: {
        color: '#E5C158',
        fontSize: 11,
    },
    avatarContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        padding: 2,
        backgroundColor: '#E5C158',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderRadius: 18,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(15, 10, 31, 0.85)',
        borderRadius: 14,
        paddingHorizontal: 12,
        height: 44,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'rgba(229, 193, 88, 0.15)',
    },
    searchIcon: {
        fontSize: 22,
        color: '#E5C158',
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 13,
    },
    filterButton: {
        width: 44,
        height: 44,
        backgroundColor: '#E5C158',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterIcon: {
        fontSize: 20,
        color: '#060511',
    },
    categoriesWrapper: {
        paddingVertical: 14,
        paddingLeft: 20,
    },
    categoryChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        backgroundColor: 'rgba(28, 16, 51, 0.5)',
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'rgba(229, 193, 88, 0.15)',
    },
    categoryChipActive: {
        backgroundColor: '#E5C158',
        borderColor: '#E5C158',
    },
    categoryText: {
        color: '#A29BB8',
        fontSize: 13,
        fontWeight: '600',
    },
    categoryTextActive: {
        color: '#060511',
        fontWeight: 'bold',
    },
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    card: {
        backgroundColor: 'rgba(28, 16, 51, 0.65)',
        width: '48%',
        borderRadius: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: 'rgba(229, 193, 88, 0.2)',
    },
    imageBox: {
        position: 'relative',
        width: '100%',
        height: 100,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 8,
        backgroundColor: '#000000',
    },
    cardImage: {
        width: '100%',
        height: '100%',
    },
    ratingBadge: {
        position: 'absolute',
        top: 6,
        left: 6,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(6, 5, 17, 0.8)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#E5C158',
    },
    starIcon: {
        color: '#E5C158',
        fontSize: 10,
        marginRight: 2,
    },
    ratingText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 'bold',
    },
    cardTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#F0ECFC',
    },
    cardSubtitle: {
        fontSize: 10,
        color: '#7E7B9A',
        marginBottom: 8,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#E5C158',
    },
    plusButton: {
        width: 28,
        height: 28,
        backgroundColor: '#E5C158',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusText: {
        color: '#060511',
        fontSize: 16,
        fontWeight: 'bold',
    },
    emptyMessage: {
        color: '#A29BB8',
        textAlign: 'center',
        marginTop: 32,
    },
});
