import config from '../modules/';

const _compMap = config.componentMap;

const routerMap = [];

if (_compMap) {
    Object.keys(_compMap).forEach(key => {
        const _item = _compMap[key];
        routerMap.push({
            path: _item.path,
            component: _item.component
        });
    });
}

export default routerMap;
