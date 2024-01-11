# Install Cypress

open a shell and goto the directory of the package.json file, then install cypress.

```bash
npm install cypress --save-dev
```

# Package.json - Create Shell Entries

```json
  "scripts": {
    "cypress": "cross-env REACT_APP_USE_MOCK_REPOS='true' && cypress open",
    "cypress:e2e": "concurrently \"npm run start\" \"cypress open\"",
    "cypress:batch:component": "cross-env REACT_APP_USE_MOCK_REPOS='true' && cypress run --component",
  },
```

# Running Cypress

Run cypress via the following commands

```
npm run cypress
```

```
npm run cypress:e2e
```

```
npm run cypress:e2e
```

The first time cypress is run within a project, it will not be configured and you will see the following screen

![Example Stories](./images/cypress-not-configured.png)

choose the **Component Testing** option

The wizard will detect the framework and bundler
![Example Stories](./images/cypress-settings-01.png)

The wizard will then prompt to install any required packages
![Example Stories](./images/cypress-bundle-prompt.png)

The wizard will then confirm that it has added various files and configurations
![Example Stories](./images/cypress-configuration-added.png)
