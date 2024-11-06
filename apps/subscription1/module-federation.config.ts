import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'subscription1',
  exposes: {
    './Routes': 'apps/subscription1/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
