# Simple Product Listing Mobile App

This project is a React Native application built to fulfill the **Simple Product Listing Mobile App** task requirements. It demonstrates UI implementation, basic navigation, and API handling.

## ✅ Task Features Implemented

The following requirements from the task have been successfully implemented:

### 1️⃣ Product List Screen
-   **Display**: Fetches and displays a list of products using `FlatList`.
-   **Item Details**: Each product card shows:
    -   [x] Product Image (optimized with `contain` mode)
    -   [x] Product Name
    -   [x] Product Price (converted to ₹)
-   **Interaction**: Tapping a product navigates to the **Product Detail Screen**.

### 2️⃣ Product Detail Screen
-   **Display**: Shows detailed information for the selected product:
    -   [x] Product Image
    -   [x] Product Title
    -   [x] Description
    -   [x] Price (in ₹)
-   **Navigation**: Includes a **Back button** (via Stack Navigator header) to return to the list.

### 🛠️ Tech Stack Used
-   **React Native**: Core framework.
-   **JavaScript**: Programming language.
-   **React Navigation**: For screen transitions (`@react-navigation/native-stack`).
-   **Fetch API**: For fetching data from `https://fakestoreapi.com`.

---

## 🚀 Additional Enhancements

-   **Indian Currency Formatting**: Prices are automatically converted from USD to INR (e.g., `₹ 1,200`).
-   **UI Refinement**: Images are displayed using `resizeMode="contain"` to ensure they look perfect on screen without cropping.
-   **Pull to Refresh**: Users can refresh the product list.
-   **Error Handling**: User-friendly error messages if the API fails.

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── ProductCard.js          # List item component
 │    └── ...
 ├── screens/
 │    ├── ProductListScreen.js    # Logic for fetching and listing products
 │    └── ProductDetailScreen.js  # Logic for displaying product details
 ├── navigation/
 │    └── AppNavigator.js         # Navigation configuration
 ├── services/
 │    └── api.js                  # API fetch logic
 └── utils/
      └── currency.js             # Currency conversion utility
```

## 🚀 Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start the app:**
    ```bash
    npm run android
    # OR
    npx expo start
    ```

---

Built with ❤️ using React Native & Expo
