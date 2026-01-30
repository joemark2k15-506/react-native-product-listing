import React, { useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Platform, Animated } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import { getTypography, getGlobalStyles } from '../theme/styles';
import { formatPrice } from '../utils/currency';

const ProductDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { product } = route.params;
    const { theme, isDark } = useTheme();
    const typography = getTypography(theme);
    const globalStyles = getGlobalStyles(theme);

    // Fade in animation for content
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    // Also update navigation header style dynamically if needed, but AppNavigator handles it mostly.
    // However, the stack navigator won't auto-update if options were set initially.
    // We can rely on AppNavigator re-rendering with theme context.

    return (
        <View style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: product.image }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                <Animated.View style={[styles.contentContainer, {
                    backgroundColor: theme.background,
                    opacity: fadeAnim,
                    transform: [{
                        translateY: fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [50, 0]
                        })
                    }]
                }]}>
                    <Text style={[typography.title, { fontSize: 22, marginBottom: 8 }]}>{product.title}</Text>
                    <Text style={[typography.price, { fontSize: 24, marginBottom: 16 }]}>{formatPrice(product.price)}</Text>

                    <View style={[styles.divider, { backgroundColor: theme.border }]} />

                    <Text style={[styles.descriptionLabel, { color: theme.textPrimary }]}>Description</Text>
                    <Text style={[typography.description, { fontSize: 15 }]}>{product.description}</Text>
                </Animated.View>
            </ScrollView>

            <View style={[styles.footer, { backgroundColor: theme.cardBackground, borderTopColor: theme.border }]}>
                <TouchableOpacity style={[styles.addToCartButton, { backgroundColor: theme.primary }]} onPress={() => alert('Added to cart')}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        paddingBottom: 100,
    },
    imageContainer: {
        width: '100%',
        height: 350,
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        padding: 20,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: -20,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
            },
        }),
    },
    divider: {
        height: 1,
        marginVertical: 16,
    },
    descriptionLabel: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        borderTopWidth: 1,
        paddingBottom: Platform.OS === 'ios' ? 24 : 16,
    },
    addToCartButton: {
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProductDetailScreen;
