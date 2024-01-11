# Control Standards

The aim of segregating controls into different categories is to encourage consistent thought throughout development with the following goals:

**UI Controls**

- Elements should be project-independent.
- Should contain options for formatting but be confined within the control to enforce a consistent look and feel throughout the application.
- Should not contain state; state is passed in through properties, and changes are raised as an event. This ensures easier testing and fewer bugs.

**UI Widgets**

- Should be comprised of **UI Controls** or very simple HTML elements to ensure a consistent look and feel throughout the application.
- Should not contain any CSS; any styling should be done at the UI level.
- Should control the state of any child **UI Controls**.
- Should control API calls.

## UI

UI Components are reusable visual components with no business logic.

## UIWidget

Visual components comprised of UI widgets or simple HTML.

## Pages

Should contain one or more widgets. Keeping logic inside UIWidgets allows them to be moved and reused on pages and allows easier testing.

## Component Responsibilities

| Type      | Business Logic | CSS | API Calls | State |
| --------- | -------------- | --- | --------- | ----- |
| UI        | No             | Yes | No        | No    |
| UI Widget | Yes            | No  | Yes       | Yes   |
| Pages     | No             | No  | No        | No    |
