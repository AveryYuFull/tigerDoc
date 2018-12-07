import { pageModules as acPageModule, componentMap as acComMap } from './NaActivity';
import filterComponentMap from './common/helpers/filterComponentMap';

filterComponentMap(acPageModule, acComMap);
console.log(acComMap);

export default {
    pageModules: acPageModule,
    componentMap: acComMap
};
