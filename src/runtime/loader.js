import { identityPhysics } from '../modules/identity-physics/index.js';
import { operators } from '../modules/operators/index.js';
import { simCore } from '../modules/sim/index.js';
import { gamesEngine } from '../modules/games/index.js';
import { xrEngine } from '../modules/xr/index.js';

export function loadModule(name) {
  console.log(`Loading module: ${name}`);

  const modules = {
    'identity-physics': identityPhysics,
    'operators': operators,
    'sim': simCore,
    'games': gamesEngine,
    'xr': xrEngine
  };

  if (modules[name]) {
    modules[name]();
  } else {
    console.warn(`Module not found: ${name}`);
  }
}

