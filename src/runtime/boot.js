import { loadModule } from './loader.js';
import { getState } from './state.js';

export async function bootPortalOS() {
  console.log('%cPortal OS v2 Booting...', 'color: #4CAF50; font-size: 16px;');

  const state = getState();
  console.log('Ecosystem State:', state);

  // Load config
  const config = await fetch('/portal.config.json').then(r => r.json());
  console.log('Config Loaded:', config);

  // Load modules from config
  config.modules.forEach(module => loadModule(module));

  console.log('%cPortal OS v2 Ready.', 'color: #2196F3; font-size: 16px;');
}
