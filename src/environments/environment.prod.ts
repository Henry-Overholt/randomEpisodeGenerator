import { movieDB } from './api.environment';
export const environment = {
  production: true,
  ...movieDB,
};
