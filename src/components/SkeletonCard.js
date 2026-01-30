import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const SkeletonCard = () => {
    const { theme } = useTheme();
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0.7,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.3,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        );
        animation.start();

        return () => animation.stop();
    }, [opacity]);

    return (
        <View style={[styles.card, { backgroundColor: theme.cardBackground, shadowColor: theme.shadow }]}>
            <Animated.View style={[styles.imagePlaceholder, { opacity, backgroundColor: theme.loadingBase }]} />
            <View style={styles.content}>
                <Animated.View style={[styles.textLine, { width: '80%', opacity, backgroundColor: theme.loadingBase }]} />
                <Animated.View style={[styles.textLine, { width: '40%', marginTop: 8, opacity, backgroundColor: theme.loadingBase }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 2,
    },
    imagePlaceholder: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 12,
    },
    content: {
        marginTop: 4,
    },
    textLine: {
        height: 16,
        borderRadius: 4,
    },
});

export default SkeletonCard;
