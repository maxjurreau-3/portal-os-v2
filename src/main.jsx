import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { bootPortalOS } from './runtime/boot.js';

bootPortalOS();

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
