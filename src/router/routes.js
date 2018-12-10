import config from '../modules/';

const { disComponentMap } = config;
// const _compMap = config.componentMap;

const routerMap = [];

disComponentMap && Object.keys(disComponentMap).forEach(key => {
    routerMap.push({
        path: key,
        component: disComponentMap[key].component
    });
});

export default routerMap;
