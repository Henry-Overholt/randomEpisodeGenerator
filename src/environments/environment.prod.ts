import { movieDB } from './api.environment.prod';
export const environment = {
  production: true,
  ...movieDB,
};
