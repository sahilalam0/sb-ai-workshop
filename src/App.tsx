import "@adaptavant/eds-fonts/inter/index.css";
import "./App.css"; // CSS file with the Tailwind directives

import brand from '@adaptavant/eds-brands/setmore';
import { Root } from '@adaptavant/eds-core';
import translations from '@adaptavant/eds-translations/english';
import HelloWorld from "./components/HelloWorld";

export default function App() {
  return (
    <Root
      brand={brand} // brand config and tokens
      colorScheme="dark" // preferred color scheme
      translations={translations} // preferred language for text that is built into components
    >
      <HelloWorld/>
    </Root>
  );
}