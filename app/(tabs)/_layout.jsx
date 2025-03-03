import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabLayout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="todos"
                options={{
                    title: 'Todos',
                    tabBarIcon: ({ color }) => <Ionicons name="list-circle-sharp" size={26} color={color} />,
                    headerTitleAlign: "center"
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color }) => <Ionicons name="people-circle-sharp" size={26} color={color} />,
                    headerTitleAlign: "center"
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <Ionicons name="settings" size={26} color={color} />,
                    headerTitleAlign: "center"
                }}
            />
        </Tabs>
    )
}

export default TabLayout