/**
 * Currency Utility
 * Handles currency conversion and formatting
 */

// Approximate exchange rate USD to INR
const EXCHANGE_RATE = 85;

/**
 * Formats a price in USD to INR
 * @param {number|string} priceInUSD - Price in USD
 * @returns {string} Formatted price in INR (e.g. ₹1,200)
 */
export const formatPrice = (priceInUSD) => {
    if (priceInUSD === null || priceInUSD === undefined) return '₹0';

    const numericPrice = parseFloat(priceInUSD);
    if (isNaN(numericPrice)) return '₹0';

    const priceInINR = numericPrice * EXCHANGE_RATE;

    // Use Intl.NumberFormat for Indian locale formatting
    // If Intl is not supported fully in environment, fallback to simple regex
    try {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(priceInINR);
    } catch (e) {
        // Fallback for older JS engines in RN
        const rounded = Math.round(priceInINR);
        return '₹' + rounded.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
    }
};
