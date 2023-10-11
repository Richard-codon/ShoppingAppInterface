import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import HomePage from './src/Components/Screens/Home';

import tailwind from './src/Components/Screens/tailwind';

const App = () => {
  return (
    <TailwindProvider tailwind={tailwind}>
      <HomePage />
    </TailwindProvider>
  );
};

export default App;
