import { ModuleRoutes } from "./routing.js";
import { PortalState } from "./state.js";

import { identityPhysics } from "../modules/identity-physics/index.js";
import { operators } from "../modules/operators/index.js";
import { simCore } from "../modules/sim/index.js";
import { gamesEngine } from "../modules/games/index.js";
import { xrEngine } from "../modules/xr/index.js";

const moduleMap = {
  "identity-physics": identityPhysics,
  operators,
  sim: simCore,
  games: gamesEngine,
  xr: xrEngine
};

export function loadModules(modules) {
  console.log("[Portal‑OS‑v2] Loading modules...");

  Object.keys(modules).forEach(moduleName => {
    const route = ModuleRoutes[moduleName] || null;

    PortalState.modules[moduleName] = {
      name: moduleName,
      route,
      loaded: true
    };

    console.log(
      `[Portal‑OS‑v2] Module Loaded: ${moduleName} → Route: ${route}`
    );

    if (moduleMap[moduleName]) {
      moduleMap[moduleName]();
    }
  });

  console.log("[Portal‑OS‑v2] All modules loaded.");
}
