// src/runtime/boot.js
// MVV‑1B → MVV‑1C — Correct Boot Sequence

import { PortalState } from './state.js';
import { loadModules } from './loader.js';

export async function bootPortalOS() {
  console.log("Portal OS v2 Booting...");

  // Load config JSON
  try {
    const config = await fetch('/portal.config.json').then(r => r.json());
    console.log("Config Loaded:", config);

    // Store config in global state
    PortalState.config = config;

    // Load modules (object, not array)
    loadModules(config.modules);

    console.log("Boot Complete");
  } catch (err) {
    console.error("Boot Error:", err);
  }
}
