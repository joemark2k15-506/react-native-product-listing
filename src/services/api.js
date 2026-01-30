/**
 * API Service
 * Handles all API calls to FakeStore API
 */

const API_BASE_URL = 'https://fakestoreapi.com';

/**
 * Fetch all products from the API
 * @returns {Promise<Array>} Array of product objects
 */
export const fetchProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
