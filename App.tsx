import React from "react";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import Routes from "./src/routes";
// import { UserIdentification } from "./src/pages/UserIdentification";
// import { Welcome } from "./src/pages/Welcome";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  //Quando está carregando a fonte ele usa um loading
  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
}
