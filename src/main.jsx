// Component imports
import './index.css'

//Library IMPORTS
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

//CSS imports
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
     <App />
    </BrowserRouter>
   
);
