import { pageModules as acPageModule, componentMap as acComMap } from './NaActivity';
import filterConfig from './common/helpers/filterConfig';

// let newComMap = {};
// filterComponentMap(acPageModule, acComMap, newComMap);
let res = filterConfig(acPageModule, acComMap);
console.log('res-->', res.disPageModules);
// export default {
//     pageModules: acPageModule,
//     componentMap: newComMap
// };
export default filterConfig(acPageModule, acComMap);
