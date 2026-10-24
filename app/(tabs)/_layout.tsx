import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootTabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveBackgroundColor: '#0105fe',
            tabBarActiveTintColor: '#ffffff',

            tabBarInactiveBackgroundColor: '#342298fe',
            tabBarInactiveTintColor: '#c69aff',

            tabBarStyle: {
                height: 65,
                },
                tabBarLabelStyle:{
                    fontSize: 15,
                    // algo nada
                }
            
        }}>
            <Tabs.Screen name="index" options={{ 
                title: "Início" ,
                tabBarIcon:(({color})=>(<FontAwesome name="home" size={24} color={color} />))
                }} />
            <Tabs.Screen name="contatos" options={{ 
                title: "Contatos" ,
                tabBarIcon:(({color})=>(<MaterialIcons name="contact-support" size={24} color={color} />))
            }} />
        </Tabs>
    )
}