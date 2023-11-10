# Streaming Plateform application

[React](https://react.dev/) streaming application.

## Prerequisites

-   The project retrieves data from Firestore, so you must have a Firebase project with Firestore configured.

### Connect the app to firebase project

Your `.env` file must contains the following keys:

| Keys                                     | Description                  |
| ---------------------------------------- | ---------------------------- |
| `REACT_APP_FIREBASE_API_KEY`             | Firebase API KEY             |
| `REACT_APP_FIREBASE_AUTH_DOMAIN`         | Firebase AUTH DOMAIN         |
| `REACT_APP_FIREBASE_PROJECT_ID`          | Firebase project ID          |
| `REACT_APP_FIREBASE_STORAGE_BUCKET`      | Firebase storage bucket      |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `REACT_APP_FIREBASE_APP_ID`              | Firebase app ID              |

## Run the application

### Developpement mode

Runs the app in the development mode using the following command:

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Production mode

Builds the app for production to the `build` folder using the following command:

```
yarn build
```

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 📚 Learn more about React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://react.dev/).
