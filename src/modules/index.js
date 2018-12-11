import { pageModules as acPageModule, componentMap as acComMap } from './NaActivity';
import filterConfig from './common/helpers/filterConfig';
// import Vue from 'vue';

// let newComMap = {};
// filterComponentMap(acPageModule, acComMap, newComMap);
// let res = filterConfig(acPageModule, acComMap);
// console.log('res-->', res.disPageModules);
// export default {
//     pageModules: acPageModule,
//     componentMap: newComMap
// };

/**
 * 获取文件映射数组
 * @returns {Array} 返回文件map
 */
// async function getFilesMap () {
//     let filesMap = await _getFilesMap();
//     console.log('files-->', filesMap);
//     return filesMap;
//     /**
//      * 获取文件映射数组
//      * @returns {Promise} 返回文件promise
//      */
//     function _getFilesMap () {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const $http = Vue.prototype.$http;
//                 $http.get('/files').subscribe(res => {
//                     resolve(res);
//                 });
//             });
//         });
//     }
// }
// getFilesMap();
export default filterConfig(acPageModule, acComMap);
// export default filterConfig(JSON.parse(getFilesMap().data.pageModules), acComMap);
