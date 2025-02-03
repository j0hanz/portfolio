import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './variables.module.css';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import '@/toastify.css';
import App from '@/App';

import emailjs from '@emailjs/browser';

// Initialize EmailJS with the user ID
emailjs.init(import.meta.env.VITE_USER_ID as string);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
