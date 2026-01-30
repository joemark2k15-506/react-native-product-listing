import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Animated, StyleSheet, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { isDark, toggleTheme, theme } = useTheme();
    const translateX = useRef(new Animated.Value(isDark ? 28 : 2)).current;

    useEffect(() => {
        Animated.spring(translateX, {
            toValue: isDark ? 28 : 2,
            useNativeDriver: true,
            bounciness: 12,
        }).start();
    }, [isDark]);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={toggleTheme}
            style={[styles.container, { backgroundColor: isDark ? '#333' : '#E0E0E0' }]}
        >
            <Animated.View style={[styles.knob, {
                transform: [{ translateX }],
                backgroundColor: isDark ? '#1E88E5' : '#FFB74D'
            }]} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 56,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
    },
    knob: {
        width: 26,
        height: 26,
        borderRadius: 13,
        position: 'absolute',
        left: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default ThemeToggle;
