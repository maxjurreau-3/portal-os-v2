import { loadModule } from './loader.js';
import { getState } from './state.js';

export function bootPortalOS() {
  console.log('%cPortal OS v2 Booting...', 'color: #4CAF50; font-size: 16px;');

  const state = getState();
  console.log('Ecosystem State:', state);

  // Load core modules
  loadModule('identity-physics');
  loadModule('operators');
  loadModule('sim');

  console.log('%cPortal OS v2 Ready.', 'color: #2196F3; font-size: 16px;');
}
