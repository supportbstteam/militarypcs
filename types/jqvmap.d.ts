declare module "jqvmap";
declare module "jqvmap/dist/maps/jquery.vmap.usa.js";

interface JQuery {
  vectorMap(options: any): JQuery;
  vectorMap(method: string): void;
}


export type FilterKey = 'state' | 'city' | 'directory' | 'subDirectory'