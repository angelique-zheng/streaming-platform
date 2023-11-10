# Streaming Platform back-office

CMS to provide content for the streaming application.

## Prerequisites

### Environment variables

Your `.env` file must contain the following keys:

| Keys                          | Description                                                              |
| ----------------------------- | ------------------------------------------------------------------------ |
| `HOST`                        | Strapi host                                                              |
| `PORT`                        | Strapi port                                                              |
| `APP_KEYS`                    | The secret keys used to sign the session cookies                         |
| `API_TOKEN_SALT`              | Salt used to generate API tokens                                         |
| `ADMIN_JWT_SECRET`            | The secret used to sign the JWT for the Admin panel                      |
| `TRANSFER_TOKEN_SALT`         | Transfer tokens allow users to authorize the strapi transfer CLI command |
| `DATABASE_CLIENT`             | The database client to use                                               |
| `DATABASE_FILENAME`           | The database schema file                                                 |
| `JWT_SECRET`                  | The secret used to sign the JWT for the Users-Permissions plugin         |
| `WEBHOOKS_POPULATE_RELATIONS` | Enable or disable receiving populated relations in webhooks              |

## Run the application

### Development mode

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
yarn develop
```

### Development mode without auroReload

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
yarn start
```

### Production mode

Builds the app for production. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
yarn build
```

## 📚 Learn more about Srapi

-   [Resource center](https://strapi.io/resource-center) - Strapi resource center.
-   [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
-   [Strapi Command Line Interface](https://docs.strapi.io/dev-docs/cli) - Strapi CLI documentation
-   [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
-   [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
-   [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.
-   [Strapi Cloud](https://cloud.strapi.io) - Strapi cloud for deployment
