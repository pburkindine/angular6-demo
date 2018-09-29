import { ɵa } from 'ng2-ui-auth';

// tslint:disable-next-line:no-any no-var-requires no-require-imports
const config: any = require('../../assets/config.json');

// tslint:disable-next-line:naming-convention variable-name
export const AuthConfig: ɵa = {
  baseUrl: config.core.apiBaseUri,
  loginUrl: `${config.core.apiBaseUri}/auth/login`,
};
