# Publishing Storybook

https://github.com/storybook-eol/storybook-deployer

```
npm i @storybook/storybook-deployer --save-dev
```

# amend package.json

Amend package.json to add a new script to deploy the storybook

```
  "scripts": {
        "storybook:deploy": "storybook-to-ghpages",
  },
```

```
npm run storybook:deploy
```

page is now published to following

```
https://DavidBerryUK.github.io/AutomatedTesting/
```
