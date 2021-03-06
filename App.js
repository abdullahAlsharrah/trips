import { NavigationContainer } from "@react-navigation/native";
import React from "react";

// Styling
import { ThemeProvider } from "styled-components";

//Navigation
import RootNavigator from "./components/Navigation";
import NavigationFooter from "./components/Navigation/NavigationFooter";

const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "#fefafb",
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb",
    backgroundColor: "#242424",
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme.dark}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
