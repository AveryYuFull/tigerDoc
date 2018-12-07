import { pageModules as acPageModule, componentMap as acComMap } from './NaActivity';
import filterComponentMap from './common/helpers/filterComponentMap';

let newComMap = {};
filterComponentMap(acPageModule, acComMap, newComMap);
export default {
    pageModules: acPageModule,
    componentMap: newComMap
};
