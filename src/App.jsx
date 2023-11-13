import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/navigation';
import Joyce from './components/joyce';
import Image from './components/image';

const App=()=> {

  return (
    <div>
<Navigation/>
<Joyce/>
<Image/>
    </div>
  );
};

  
export default App;
