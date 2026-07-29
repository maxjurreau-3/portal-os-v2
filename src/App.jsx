import React, { useEffect, useState } from 'react';
import { PortalState } from './runtime/state.js';

export default function App() {
  const [modules, setModules] = useState([]);
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
    if (PortalState.modules) {
      setModules(Object.keys(PortalState.modules));
    }
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui' }}>
      
      {/* NavRail */}
      <div style={{
        width: '200px',
        background: '#111',
        color: '#fff',
        padding: '20px'
      }}>
        <h2 style={{ marginTop: 0 }}>Portal‑OS‑v2</h2>
        <p style={{ opacity: 0.7 }}>Modules</p>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {modules.map(m => (
            <li 
              key={m}
              onClick={() => setActiveModule(m)}
              style={{
                padding: '8px 0',
                cursor: 'pointer',
                color: activeModule === m ? '#4CAF50' : '#fff'
              }}
            >
              {m}
            </li>
          ))}
        </ul>
      </div>

      {/* Viewport */}
      <div style={{ flex: 1, padding: '24px' }}>
        {!activeModule && (
          <>
            <h1>Umbrella Ecosystem OS</h1>
            <p>Runtime boot sequence executed.</p>
            <p>Select a module from the NavRail.</p>
          </>
        )}

        {activeModule && (
          <>
            <h1>{activeModule.toUpperCase()}</h1>
            <p>Route: {PortalState.modules[activeModule].route}</p>
            <p>Module is active and bound to runtime.</p>
          </>
        )}
      </div>
    </div>
  );
}
