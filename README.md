# Aora

Aora is a modern video sharing mobile app built with React Native and Expo. It provides a rich user experience with features like video streaming, content creation, and comprehensive user authentication using Appwrite.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup](#setup)
- [Screenshots](#screenshots)
- [License](#license)

## Introduction

Aora delivers a seamless video sharing experience where users can sign up, log in, watch trending videos, and upload their own content with ease. The app makes use of Expo Router for navigation and NativeWind for styling.

## Features

- **User Authentication:** Secure sign-in and sign-up flows with Appwrite ([see sign-in](<c:\Users\Sachin%20Kumar%20Gupta\Desktop\work-space\React-Native\aora\app(auth)\sign-in.jsx>) & [sign-up](<c:\Users\Sachin%20Kumar%20Gupta\Desktop\work-space\React-Native\aora\app(auth)\sign-up.jsx>)).
- **Video Streaming & Playback:** Browse, search, and watch videos ([home screen](<c:\Users\Sachin%20Kumar%20Gupta\Desktop\work-space\React-Native\aora\app(tabs)\home.jsx>)).
- **Content Creation:** Upload new video posts with thumbnails ([create screen](<c:\Users\Sachin%20Kumar%20Gupta\Desktop\work-space\React-Native\aora\app(tabs)\create.jsx>)).
- **Trending Videos:** Explore trending video content with interactive animations ([trending component](c:\Users\Sachin%20Kumar%20Gupta\Desktop\work-space\React-Native\aora\components\Trending.jsx)).
- **Responsive Design:** Optimized look and feel across different devices.

## Tech Stack

- **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Routing:** [Expo Router](https://expo.github.io/router)
- **Backend:** [Appwrite](https://appwrite.io/) via [react-native-appwrite](https://github.com/appwrite/appwrite)
- **Styling:** [NativeWind](https://www.nativewind.dev/)
- **State Management:** React Context API ([GlobalProvider](c:\Users\Sachin%20Kumar%20Gupta\Desktop\work-space\React-Native\aora\context\GlobalProvider.js))
- **Media Playback:** [Expo AV](https://docs.expo.dev/versions/latest/sdk/av/) for video and audio control

## Folder Structure

```
.
├── app/
│   ├── _layout.jsx
│   ├── index.jsx
│   ├── (auth)/
│   │   ├── _layout.jsx
│   │   ├── sign-in.jsx
│   │   └── sign-up.jsx
│   ├── (tabs)/
│   │   ├── _layout.jsx
│   │   ├── bookmark.jsx
│   │   ├── create.jsx
│   │   ├── home.jsx
│   │   └── profile.jsx
│   └── search/
│       └── [query].jsx
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── splash.png
│   ├── fonts/
│   ├── icons/
│   └── images/
├── components/
│   ├── CustomButton.jsx
│   ├── EmptyState.jsx
│   ├── FormField.jsx
│   ├── InfoBox.jsx
│   ├── Loader.jsx
│   ├── SearchInput.jsx
│   ├── Trending.jsx
│   ├── VideoCard.jsx
│   └── index.js
├── constants/
│   ├── icons.js
│   └── images.js
├── context/
│   └── GlobalProvider.js
├── lib/
│   ├── appwrite.js
│   └── useAppwrite.js
├── .gitignore
├── app.json
├── babel.config.js
├── package.json
└── tailwind.config.js
```

## Setup

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/sachinkg-13/Aora.git
   cd aora
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Run the Project:**

   ```sh
   npm start
   ```

4. **Launch on Your Device:**

   Use [Expo Go](https://expo.dev/go) on your mobile device or an emulator to run the application.

## Screenshots

### Authentication

<table>
  <tr>
    <td align="center">
      <img src="https://cloud.appwrite.io/v1/storage/buckets/66f56630002ccbb5410b/files/67db1aa0000d1289bb70/view?project=66f562d800086cf79ade&mode=admin" alt="Landing Page" style="max-width:300px;"/>
    </td>
    <td align="center">
      <img src="https://cloud.appwrite.io/v1/storage/buckets/66f56630002ccbb5410b/files/67db1aa700322a411925/view?project=66f562d800086cf79ade&mode=admin" alt="Sign In" style="max-width:300px;"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://cloud.appwrite.io/v1/storage/buckets/66f56630002ccbb5410b/files/67db1abb000f21a10eab/view?project=66f562d800086cf79ade&mode=admin" alt="Sign Up" style="max-width:300px;"/>
    </td>
    <td align="center">
      <!-- empty cell -->
    </td>
  </tr>
</table>

### Tabs

<table>
  <tr>
    <td align="center">
      <img src="https://cloud.appwrite.io/v1/storage/buckets/66f56630002ccbb5410b/files/67db1a98000f91ae7071/view?project=66f562d800086cf79ade&mode=admin" alt="Home" style="max-width:300px;"/>
    </td>
    <td align="center">
      <img src="https://cloud.appwrite.io/v1/storage/buckets/66f56630002ccbb5410b/files/67db1ac40032c5a1b0b9/view?project=66f562d800086cf79ade&mode=admin" alt="Create" style="max-width:300px;"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://cloud.appwrite.io/v1/storage/buckets/66f56630002ccbb5410b/files/67db1a8f0029135c0718/view?project=66f562d800086cf79ade&mode=admin" alt="Bookmark" style="max-width:300px;"/>
    </td>
    <td align="center">
      <img src="https://cloud.appwrite.io/v1/storage/buckets/66f56630002ccbb5410b/files/67db1ab100112e937e40/view?project=66f562d800086cf79ade&mode=admin" alt="Profile" style="max-width:300px;"/>
    </td>
  </tr>
</table>

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding 😊!
