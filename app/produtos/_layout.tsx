import { Stack } from "expo-router";
import { Button } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootStackLayout() {

    // const router = useRouter();

    return (
        <Stack screenOptions={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: 'rgb(0, 0, 0)', // Cor do texto do cabeçalho
            headerTitleAlign: 'center', // Alinhamento do texto do cabeçalho
            headerRight: () => (
                <FontAwesome name="heart-o" size={24} color="black" style={{ marginRight: 12 }}/> 
            ),
        }}>
        </Stack >
    );
}