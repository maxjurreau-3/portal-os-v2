// src/runtime/renderers.js
// Module UI Surfaces

export const ModuleRenderers = {
  games: () => ({
    title: "Games Engine",
    description: "Interactive game systems and runtime hooks.",
    content: "Games module surface is active."
  }),

  "identity-physics": () => ({
    title: "Identity Physics",
    description: "Identity-based physics models and geometry.",
    content: "Identity Physics module surface is active."
  }),

  operators: () => ({
    title: "Operators",
    description: "Operator logic, transformations, and pipelines.",
    content: "Operators module surface is active."
  }),

  sim: () => ({
    title: "SIM Core",
    description: "SIM runtime, pipelines, and system orchestration.",
    content: "SIM Core module surface is active."
  }),

  xr: () => ({
    title: "XR Engine",
    description: "Extended reality systems and viewport rendering.",
    content: "XR module surface is active."
  })
};
