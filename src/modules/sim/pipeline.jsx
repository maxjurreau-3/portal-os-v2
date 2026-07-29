import React from "react";

export function SimPipelineSurface() {
  return (
    <div style={{ padding: "12px" }}>
      <h2>SIM Pipeline</h2>
      <p>Core runtime orchestration pipeline.</p>

      <div style={{
        marginTop: "20px",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}>
        <h3>Pipeline Stages</h3>
        <ul>
          <li>Boot → Load Config</li>
          <li>Load Modules</li>
          <li>Activate Module</li>
          <li>Render Surface</li>
          <li>XR / Operators Hooks</li>
        </ul>
      </div>

      <div style={{
        marginTop: "20px",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}>
        <h3>Runtime State</h3>
        <p>PortalState.active: (updates when you click modules)</p>
      </div>
    </div>
  );
}
