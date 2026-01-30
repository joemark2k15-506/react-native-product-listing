import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const { theme } = useTheme();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.cardBackground,
                },
                headerTintColor: theme.textPrimary,
                headerTitleStyle: {
                    fontWeight: '600',
                    color: theme.textPrimary,
                },
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: theme.background,
                },
                // Add common animation for screen transitions
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen
                name="ProductList"
                component={ProductListScreen}
                options={{
                    title: 'Product Store',
                    headerRight: () => (
                        <View style={{ marginRight: 8 }}>
                            <ThemeToggle />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
                options={({ route }) => ({
                    title: route.params.product.title,
                    headerBackTitleVisible: false,
                })}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
