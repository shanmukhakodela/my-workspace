import { ModuleFederationConfig } from '@nx/webpack';
import * as baseConfig from '../../module-federation.config';
const config: ModuleFederationConfig = {
  ...baseConfig,
  name: 'dashboard',
  exposes: {
    './Routes': 'apps/dashboard/src/app/remote-entry/entry.routes.ts',
  },
};
export default config;
