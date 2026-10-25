import { Stack, useRouter } from "expo-router";
import { Button } from "react-native";

export default function RootStackLayout() {

    const router = useRouter();

    return (
        <Stack screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: '#072543', // Cor de fundo do cabeçalho
            },
            headerTintColor: '#ffffff', // Cor do texto do cabeçalho
            headerTitleAlign: 'center', // Alinhamento do texto do cabeçalho
        }}>
            <Stack.Screen name="inicio" options={{
                title: "Home",
                headerRight: () => <Button title="Ir para Tabs" onPress={() => router.back()} />
            }} />
            <Stack.Screen name="auth/login" options={{
                title: 'Tela de Login'
            }} />
        </Stack >
    );
}