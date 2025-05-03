# Near-Earth Object (NEO) Tracker 🚀

This is a React Native app built with Expo that displays Near-Earth Objects (NEOs) from NASA's API based on a user-selected date. You can view details such as velocity, distance, size, and whether the object is potentially hazardous.

---

## 📦 Prerequisites

- **Node.js** (v18 or later recommended)
- **Expo CLI**  
  Install globally if you haven't already:
  ```bash
  npm install -g expo
  ```
- **Git**
- **Android Studio** or **Xcode** (for emulator testing, optional)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/emunoz8/NearEarthObjects.git
cd NearEarthObjects 
```

### 2. Install Dependencies

#### Option 1: With Setup Script (Linux/macOS)

```bash
chmod +x setup.sh
./setup.sh
```

#### Option 2: Manually

```bash
npm install
```

---

## 🔑 API Key Setup

1. Get your free NASA API key from [https://api.nasa.gov](https://api.nasa.gov).
2. Create a `.env` file in the root of the project:

```env
API_KEY=your_nasa_api_key_here
```

---

## 📱 Running the App

Start the Expo development server:

```bash
npm start
```

This will open the Expo Developer Tools in your browser.

You can then:

- Press `i` to open the iOS simulator (Mac only)
- Press `a` to open the Android emulator
- Or scan the QR code using the **Expo Go** app on your phone

---

## 🗂 Project Structure

```
neo-tracker/
├── app/                    # Screens and pages
├── components/             # Reusable UI components
├── utils/                  # Utility functions like date parsing and API calls
├── .env                    # Your API key goes here (not committed to Git)
├── setup.sh                # Optional setup script
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

---

## 📝 License

MIT License © 2025

---

## 👨‍💻 Author

Created by Edwin Munoz – Contributions welcome!
