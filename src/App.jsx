import React, { useEffect } from 'react';
import { bootPortalOS } from './runtime/boot.js';

function App() {
  useEffect(() => {
    bootPortalOS();
  }, []);

  return (
    <div style={{ padding: '24px', fontFamily: 'system-ui' }}>
      <h1>Portal OS v2</h1>
      <p>Umbrella Ecosystem OS is running.</p>
      <p>Runtime boot sequence executed.</p>
    </div>
  );
}

export default App;
