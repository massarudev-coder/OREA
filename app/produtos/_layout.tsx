import { Stack } from "expo-router";
import { Pressable } from "react-native";
import { useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const GOLD = "#E5C158";

export default function RootStackLayout() {
    const [favoritado, setFavoritado] = useState(false);

    return (
        <Stack screenOptions={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: GOLD,
            headerTitleAlign: 'center', // Alinhamento do texto do cabeçalho
            headerRight: () => (
                <Pressable
                    onPress={() => setFavoritado((atual) => !atual)}
                    accessibilityRole="button"
                    accessibilityLabel={favoritado ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                    accessibilityState={{ selected: favoritado }}
                    hitSlop={10}
                    style={{ marginRight: 12 }}
                >
                    <FontAwesome
                        name={favoritado ? "heart" : "heart-o"}
                        size={24}
                        color={GOLD}
                    />
                </Pressable>
            ),
        }}>
        </Stack >
    );
}