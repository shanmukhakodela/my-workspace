import { ModuleFederationConfig } from '@nx/webpack';
import * as baseConfig from '../../module-federation.config';

const config: ModuleFederationConfig = {
  ...baseConfig,
  name: 'login',
  remotes: [],
};

export default config;