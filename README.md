# Simple Product Listing Mobile App

This project is a React Native application built to fulfill the **Simple Product Listing Mobile App** task requirements. It demonstrates UI implementation, basic navigation, and API handling.

## 📥 Download APK

**[🚀 Click to Download Optimized Release APK (Direct Link)](https://github.com/joemark2k15-506/react-native-product-listing/releases/latest/download/app-arm64-v8a-release.apk)**

> [!IMPORTANT]
> **To make this link work:** 
> 1. Go to **Releases** on your GitHub repo.
> 2. Create a **New Release** (e.g., version `v1.0.0`).
> 3. Upload the file `app-arm64-v8a-release.apk` (found in `android/app/build/outputs/apk/release/`) to that release.
> 4. Save the release.

---

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

## 📋 Task Checklist & Status

Below is the detailed progress and completion status of all project requirements:

- [x] **Project Setup**: Initialized React Native & Expo project.
- [x] **API Integration**: Integrated `fakestoreapi.com` for real product data.
- [x] **Product List Screen**: Implemented with loading, error, and pull-to-refresh.
- [x] **Product Detail Screen**: Deep-dive view with full descriptions and navigation.
- [x] **Localization**:
  - [x] USD to INR conversion.
  - [x] Indian price formatting (`₹`).
- [x] **UI/UX Refinement**:
  - [x] `resizeMode="contain"` for perfect product images.
  - [x] Clean white-themed product cards.
- [x] **Performance Optimization**:
  - [x] Applied **ABI Splits** to reduce app size by **~70%** (~40MB).
  - [x] Fixed code package naming issues to enable release builds.
- [x] **Native Assets**: Fixed App Icon and Splash screen via Expo prebuild.
- [x] **Deployment**: Generated and verified Release APK.

---

Built with ❤️ using React Native & Expo
