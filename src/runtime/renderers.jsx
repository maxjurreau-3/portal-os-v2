// src/runtime/renderers.jsx
// Module UI Surfaces

import React from "react";

export const ModuleRenderers = {
  games: () => ({
    title: "Games Engine",
    description: "Interactive game systems and runtime hooks.",
    content: (
      <>
        <p>Games module surface is active.</p>
        <ul>
          <li>Session orchestration</li>
          <li>Input mapping</li>
          <li>Physics hooks</li>
        </ul>
      </>
    )
  }),

  "identity-physics": () => ({
    title: "Identity Physics",
    description: "Identity-based physics models and geometry.",
    content: (
      <>
        <p>Identity Physics module surface is active.</p>
        <p>Use this surface to visualize identity spaces and transformations.</p>
      </>
    )
  }),

  operators: () => ({
    title: "Operators",
    description: "Operator logic, transformations, and pipelines.",
    content: (
      <>
        <p>Operators module surface is active.</p>
        <p>Future: operator graphs, composition trees, and pipeline views.</p>
      </>
    )
  }),

  sim: () => ({
    title: "SIM Core",
    description: "SIM runtime, pipelines, and system orchestration.",
    content: (
      <>
        <p>SIM Core module surface is active.</p>
        <p>This is the control plane for:</p>
        <ul>
          <li>Pipeline introspection</li>
          <li>Runtime state views</li>
          <li>Ecosystem mapping surfaces</li>
        </ul>
      </>
    )
  }),

  xr: () => ({
    title: "XR Engine",
    description: "Extended reality systems and viewport rendering.",
    content: (
      <>
        <p>XR module surface is active.</p>
        <p>Future: scene graphs, camera rigs, and spatial overlays.</p>
      </>
    )
  })
};
