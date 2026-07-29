import React, { useEffect, useState } from 'react';
import { PortalState } from './runtime/state.js';
import { ModuleRenderers } from './runtime/renderers.js';


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
        {activeModule && (() => {
  const renderer = ModuleRenderers[activeModule];
  const payload = renderer ? renderer() : null;

  return (
    <>
      <h1>{payload?.title || activeModule.toUpperCase()}</h1>
      <p>{payload?.description || "Module active."}</p>

      <div style={{ marginTop: "20px", opacity: 0.8 }}>
        {payload?.content}
      </div>

      <p style={{ marginTop: "20px", fontSize: "0.8rem", opacity: 0.6 }}>
        Route: {PortalState.modules[activeModule].route}
      </p>
    </>
  );
})()}


       
