## Table of Contents

- [Basic Project Setup](#basic-project-setup)
- [Set Environment Variables for Firebase Config](#set-environment-variables-for-firebase-config)
  - [Without setup Environment Variables for Firebase Configuration](#without-setup-environment-variables-for-firebase-configuration)
  - [Set Environment Variables for Firebase Configuration](#set-environment-variables-for-firebase-configuration)

# Basic Project Setup

- [Basic Project Setup](https://github.com/crescentpartha/Travel-Guru/blob/main/travel-guru/___Steps___.md#basic-project-setup "Basic Project Setup - travel-guru")

**[🔼Back to Top](#table-of-contents)**

# Set Environment Variables for Firebase Config

## Without setup Environment Variables for Firebase Configuration

``` JavaScript
// in firebase.init.js

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiufhWvPhee0o9yz1BPyoXj-Luhq2ghzg",
  authDomain: "bangla-edtech-resources.firebaseapp.com",
  projectId: "bangla-edtech-resources",
  storageBucket: "bangla-edtech-resources.appspot.com",
  messagingSenderId: "38725964773",
  appId: "1:38725964773:web:8231ceba2d5dc37057950c"
};
```

**[🔼Back to Top](#table-of-contents)**

## Set Environment Variables for Firebase Configuration

``` JavaScript
// In .env.local

REACT_APP_apiKey=AIzaSyDiufhWvPhee0o9yz1BPyoXj-Luhq2ghzg
REACT_APP_authDomain=bangla-edtech-resources.firebaseapp.com
REACT_APP_projectId=bangla-edtech-resources
REACT_APP_storageBucket=bangla-edtech-resources.appspot.com
REACT_APP_messagingSenderId=38725964773
REACT_APP_appId=1:38725964773:web:8231ceba2d5dc37057950c
```

``` JavaScript
// In firebase.init.js

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};
```

**[🔼Back to Top](#table-of-contents)**
