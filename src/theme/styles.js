import { StyleSheet, Platform } from 'react-native';

export const getTypography = (theme) => ({
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: theme.textPrimary,
    },
    productName: {
        fontSize: 16,
        fontWeight: '500',
        color: theme.textPrimary,
        lineHeight: 22,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.priceHighlight,
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        color: theme.textSecondary,
        lineHeight: 20,
    },
});

export const getGlobalStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
    },
    card: {
        backgroundColor: theme.cardBackground,
        borderRadius: 12,
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        ...Platform.select({
            ios: {
                shadowColor: theme.shadow,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
            },
            android: {
                elevation: 4,
                shadowColor: theme.shadow,
            },
        }),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    description: { // Helper for empty states etc
        fontSize: 16,
        color: theme.textSecondary,
        textAlign: 'center',
    }
});
