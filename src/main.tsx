import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import App from '@/App';

import emailjs from 'emailjs-com';

// Initialize EmailJS with the user ID
emailjs.init(process.env.REACT_APP_USER_ID as string);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
