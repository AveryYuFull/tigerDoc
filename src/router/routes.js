import config from '../modules/';

const _compMap = config.componentMap;

const routerMap = [];

if (_compMap) {
    Object.keys(_compMap).forEach(key => {
        routerMap.push({
            path: key,
            component: _compMap[key].component
        });
    });
}

export default routerMap;
