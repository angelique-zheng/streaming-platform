# Streaming Plateform server

Cloud function that triggers when data is added to the Strapi CMS and saves the data in Firestore.

## Run the server

### Launch the emulator

Run the Firebase emulators with the following command:

```
yarn serve
```

### Deploy functions

Follow these steps to deploy Cloud Functions in the Firebase project:

-   Add the Firebase project ID to `.firebaserc`, in the field `projects`. Example:
    ```
    {
        "projects": {
            "dev": "project-id"
        }
    }
    ```
-   Add the `--project=[project_alias]` to `deploy` script in the `package.json`. Example:
    ```
    "deploy": "firebase deploy --only functions --project=dev"
    ```
-   If you don't want to use the `--project` flag, you can define the project locally with `firebase use [project-id]` so that firebase knows which project to use.

-   Run the following command to deploy:

```
yarn deploy
```

## 📚 Learn more about Firebase

-   [Firebase](https://firebase.google.com/) - Official Firebase documentation.
-   [Cloud Functions](https://firebase.google.com/docs/functions) - Official Cloud Functions documentation.
-   [Firestore](https://firebase.google.com/docs/firestore) - Official Firestore documentation.
