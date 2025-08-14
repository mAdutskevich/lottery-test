# Lottery Test Project

## Description

Lottery Test is a mobile application designed to simulate and test lottery
number combinations. Users can generate, view, and manage different lottery
combinations using an intuitive interface. The app leverages modern React Native
technologies and state management to provide a smooth and interactive experience
for experimenting with lottery strategies and combinations.

The app consists of two screens:

- **PlayCombinationsScreen**: Displays the combinations selected by the user and
  provides the ability to add, remove, or purchase combinations.
- **NumberPickerScreen**: Allows users to select numbers for a new combination
  and includes validations to ensure correct number selection.

The app was developed for Expo Snack. The limitations are described in the
**Notes** section.

## Main Folders Overview

- **src/assets**: Images and static assets (png, svg).
- **src/components**: UI components, organized as:
  - `atoms`: Basic UI elements (Button, IconButton, NumberItem).
  - `molecules`: More complex UI blocks (e.g., Combination, Header).
  - `layouts`: Layout components (e.g., SafeAreaLayout).
  - `modals`: Modal components (e.g., LocalModal).
- **src/constants**: Project-wide constants (dimensions, combinations, etc).
- **src/enums**: TypeScript enums for project-wide use.
- **src/navigation**: Navigation setup and screen definitions.
- **src/store**: State management (e.g., combinationsStore using Zustand).
- **src/themes**: Theme definitions, palettes, spacing, typography, attributes.
- **src/types**: TypeScript types and interfaces.
- **src/utils**: Utility functions (e.g., scaling helpers).

## Main Dependencies

- **React Native**: Core framework for building native apps.
- **Expo**: Toolchain for React Native development.
- **Zustand**: State management library.
- **React Navigation**: Navigation library for React Native.
- **TypeScript**: Type safety and better developer experience.
- **ESLint & Prettier**: Linting and code formatting.

## Start Development server

1. **Install dependencies**  
   Run in your project root: `npm i`
2. **Start the development server**  
   Run in your project root: `npm start`

## Linting during development

The app uses **ESLint** and **Prettier** to avoid errors and keep the code
clean:

- Run in your project root: `npm run format` to analyze code for styling errors.
- Run in your project root: `npm run lint` to start linting.

To verify that your project and all dependency versions are set up correctly,
run: `npm run expo-doctor`

## Development

- The app uses a Stack navigator for screen transitions.
- The `Modal` component from the React Native library is used for
  non-navigational modals.
- Index files are used for re-exports to keep import paths short and clean.
- Shared components, types, enums, and utilities should be placed at the top
  level of the `src` folder hierarchy for easy reuse.
- The `components` folder follows an atomic design structure.
- The `screens` folder is organized using a feature-slice structure.
- To prevent content from overlapping notches or other reserved areas on the
  screen, use the `useSafeAreaInsets` hook from the
  `react-native-safe-area-context` library, following React Navigation best
  practices.
- To ensure the app looks good on different devices, all sizes are managed using
  scaling functions.
- The theme includes most of the attributes needed for development. All sizes
  follow a 4px step, except for smaller sizes.

## Notes

1. Alias configuration was skipped because it is not supported by Expo Snack.
2. Local images are not supported by Expo Snack, but they are included in the
   app, because it's possible to extract the image URLs from the GitHub repo and
   use them in the project(Header component).
3. Tests are not included in the project to keep things simple.
4. The app uses the default platform font family for simplicity.
5. The app includes several validations that are not in the task.
