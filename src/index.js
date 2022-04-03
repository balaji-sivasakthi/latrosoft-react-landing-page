import React from 'react';
import App from './App';
import './assets/vendor/bootstrap.min.css'
import './assets/sass/_latrosoft.scss'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);