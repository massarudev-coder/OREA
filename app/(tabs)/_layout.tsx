import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const gold = '#E5C158';
const muted = '#7E7B9A';

export default function StoreTabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: gold,
                tabBarInactiveTintColor: muted,
                tabBarStyle: {
                    height: 65,
                    backgroundColor: '#0F0A1F',
                    borderTopColor: 'rgba(229, 193, 88, 0.25)',
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontWeight: '500',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={20} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="heart" size={18} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: 'Carrinho',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="shopping-cart" size={18} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Usuário',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={18} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
