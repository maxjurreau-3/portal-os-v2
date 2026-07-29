import React, { useEffect, useState } from 'react';
import { bootPortalOS } from './runtime/boot.js';

function App() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    bootPortalOS().then(() => {
      fetch('/portal.config.json')
        .then(r => r.json())
        .then(config => setModules(config.modules));
    });
  }, []);

  return (
    <div style={{ padding: '24px', fontFamily: 'system-ui' }}>
      <h1>Portal OS v2</h1>
      <p>Umbrella Ecosystem OS is running.</p>

      <h2>Loaded Modules</h2>
      <ul>
        {modules.map(m => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
