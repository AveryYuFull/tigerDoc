/**
 * 过滤pageModule对象
 * @param {*} acPageModule pageModule
 * @param {*} acComMap componentMap
 * @param {*} path path
 */
export default function filterComponentMap (acPageModule, acComMap, path) {
    if (!acPageModule || !acComMap) {
        return;
    }
    for (let i = 0; i < acPageModule.length; i++) {
        const _pageItem = acPageModule[i];
        const _pages = _pageItem.pages;
        const _path = (path || '') + '/' + _pageItem.name;
        if (_pages) {
            let _pathPages = _pageItem.pathPages;
            if (!_pathPages) {
                _pathPages = _pageItem.pathPages = [];
            }
            for (let j = 0; j < _pages.length; j++) {
                const _compName = _pages[j];
                if (_compName) {
                    const _comMap = acComMap[_compName];
                    let _item = {
                        name: _compName,
                        path: _path + '/' + _compName,
                        component: _comMap
                    };
                    _pathPages.push(_item);
                    if (!_comMap.path) {
                        acComMap[_compName] = _item;
                    }
                }
            }
        }
        filterComponentMap(_pageItem.children, acComMap, _path);
    }
}
