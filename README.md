# Galia - Mobile App

<div align="center">
  <img src="./assets/logo.png" alt="Galia Logo" width="120"/>
</div>

## 📱 About

Galia is a modern mobile application built with React Native and Expo, featuring a beautiful dark theme UI. The app includes authentication flows, tab navigation, and reusable components for image galleries.

## 🚀 Technologies

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Router](https://docs.expo.dev/routing/introduction/)

## 📚 Libraries

- `phosphor-react-native` - Modern icon library
- `react-native-pager-view` - Native ViewPager component
- Other Expo managed dependencies

## ⚙️ Features

### Authentication
- Login screen with email and password
- Sign up screen with form validation
- Social login options (Facebook, Google, Apple, GitHub)
- Remember me functionality
- Secure password input

### Navigation
- Tab-based navigation
- Stack navigation for auth flow
- Protected routes
- Smooth transitions

### Components

#### SliderPhotos
A reusable image slider component with the following features:
- Full-screen modal view
- Swipeable gallery
- Touch interaction
- Dynamic image loading
- Customizable container styles

```typescript
// Usage example
<SliderPhotos 
  images={[
    require('./assets/image1.png'),
    require('./assets/image2.png'),
  ]}
  containerStyle={{ height: 300 }}
/>
```

## 🎨 UI/UX

- Dark theme with modern aesthetics
- Consistent color palette:
  - Background: #181a20
  - Accent: #1ab65c
  - Input fields: #1F222A
- Custom form inputs with icons
- Responsive layouts
- Smooth animations

## 📂 Project Structure

```
galia/
├── app/
│   ├── stacks/
│   │   ├── Login.tsx
│   │   └── Signup.tsx
│   ├── tabs/
│   │   ├── Home.tsx
│   │   └── Profile.tsx
│   └── _layout.tsx
├── components/
│   └── SliderPhotos.tsx
├── assets/
└── package.json
```

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/galia.git
```

2. Install dependencies
```bash
cd galia
npm install
```

3. Start the development server
```bash
npx expo start
```

## 📱 Running on Device

1. Install Expo Go on your device
2. Scan the QR code from terminal
3. Or run on simulator/emulator:
```bash
# iOS
npm run ios

# Android
npm run android
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](link-to-issues).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Made with 💚 by [Your Name]

[GitHub](your-github-link) · [LinkedIn](your-linkedin-link) 