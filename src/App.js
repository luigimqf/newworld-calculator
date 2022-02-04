import React from 'react'
import { MainContent } from './components/MainContent';

import {  DisplayProvider } from "./contexts/siteDisplay";

function App() {

  return (
    <DisplayProvider>
      <MainContent />
    </DisplayProvider>
  );
}

export default App;
