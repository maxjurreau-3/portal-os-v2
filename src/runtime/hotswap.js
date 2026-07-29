// src/runtime/hotswap.js
// Module Hot‑Swap Layer

import { PortalState } from './state.js';

export function activateModule(name) {
  if (!PortalState.modules[name]) {
    console.warn(`[Portal‑OS‑v2] Cannot activate unknown module: ${name}`);
    return null;
  }

  PortalState.active = name;

  return {
    name,
    route: PortalState.modules[name].route
  };
}
