import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getTypography, getGlobalStyles } from '../theme/styles';
import { formatPrice } from '../utils/currency';

const ProductCard = ({ product, onPress }) => {
    const { theme } = useTheme();
    const typography = getTypography(theme);
    const globalStyles = getGlobalStyles(theme);

    // Enter animation
    const scaleAnim = React.useRef(new Animated.Value(0.95)).current;

    React.useEffect(() => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity
                style={globalStyles.card}
                onPress={onPress}
                activeOpacity={0.7}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: product.image }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.content}>
                    <Text style={[typography.productName, { marginBottom: 6 }]} numberOfLines={2}>
                        {product.title}
                    </Text>
                    <Text style={typography.price}>
                        {formatPrice(product.price)}
                    </Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 12,
        backgroundColor: '#FFFFFF',
        padding: 8,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    content: {
        marginTop: 4,
    },
});

export default ProductCard;
