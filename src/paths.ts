import { PROJECTS, SERVICES } from './constants';
// Slugs live with each record, so links and generated pages cannot drift apart.
export const SERVICE_SLUGS: Record<number, string> = Object.fromEntries(SERVICES.map(service => [service.id, service.slug]));
export const PROJECT_SLUGS: Record<number, string> = Object.fromEntries(PROJECTS.map(project => [project.id, project.slug]));
export const servicePath = (id: number) => `/services/${SERVICE_SLUGS[id]}`;
export const projectPath = (id: number) => `/portfolio/${PROJECT_SLUGS[id]}`;
