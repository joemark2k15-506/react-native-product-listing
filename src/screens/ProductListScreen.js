import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, StatusBar, RefreshControl, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';
import { fetchProducts } from '../services/api';
import { useTheme } from '../context/ThemeContext';
import { getGlobalStyles } from '../theme/styles';

const ProductListScreen = () => {
    const navigation = useNavigation();
    const { theme } = useTheme();
    const globalStyles = getGlobalStyles(theme);

    const [products, setProducts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadProducts = async () => {
        try {
            setError(null);
            const data = await fetchProducts();
            setProducts(data);
        } catch (err) {
            setError('Failed to load products');
            console.error(err);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        loadProducts();
    }, []);

    const renderItem = ({ item }) => (
        <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        />
    );

    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={globalStyles.description}>No products found.</Text>
        </View>
    );

    if (loading) {
        return (
            <View style={globalStyles.container}>
                <StatusBar barStyle={theme.statusBar} backgroundColor={theme.background} />
                <FlatList
                    data={[1, 2, 3, 4]}
                    renderItem={() => <SkeletonCard />}
                    keyExtractor={(item) => item.toString()}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }

    return (
        <View style={globalStyles.container}>
            <StatusBar barStyle={theme.statusBar} backgroundColor={theme.background} />
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[theme.primary]}
                        tintColor={theme.primary}
                    />
                }
                ListEmptyComponent={ListEmptyComponent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContent: {
        paddingVertical: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    }
});

export default ProductListScreen;
