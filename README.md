### In Progress...

# Fireblogs App
Learning to Build a multi-user blog project with Vue.js, Vuex and Firebase

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

For Firestore:

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userID} {
      allow read; 
      allow write: if request.auth.uid != null
    }
    match /blogPosts/{postID} {
    	allow read;
      allow write: if request.auth.token.admin == true;
    }
  }
}


For Storage:
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read,
      write: if request.auth.tokecn.admin == true; 
    }
  }
}