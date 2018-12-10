/**
 * 过滤pageModule对象
 * @param {*} pageModules page module列表数据
 * @param {*} compMap 列表对应组件模块
 * @param {String} keyVal 关键字
 * @returns {Object|Null} 返回过滤后的数据
 */
export default function filterConfig (pageModules, compMap, keyVal) {
    if (!pageModules || !compMap) {
        return null;
    }

    let newPageModules = JSON.parse(JSON.stringify(pageModules));
    let newCompMap = [];
    _filterConfig(newPageModules, newCompMap);
    _setVisible(newPageModules);
    return {
        pageModules: pageModules,
        componentMap: compMap,
        disPageModules: newPageModules,
        disComponentMap: newCompMap
    };

    /**
     * 过滤pageModule对象
     * @param {*} newPageModules page module列表数据
     * @param {*} newCompMap 列表对应组件模块
     * @param {*} parent 组件父级指针
     * @param {*} path 路由地址
     */
    function _filterConfig (newPageModules, newCompMap, parent, path) {
        if (!newPageModules || !newCompMap) {
            return;
        }
        newPageModules.forEach(pModule => {
            if (pModule) {
                pModule.$parent = parent;
                const _path = (path || '') + '/' + pModule.name;
                const _pages = pModule.pages;
                if (_pages) {
                    _pages.forEach((page, index) => {
                        if (page) {
                            const _component = compMap[page];
                            let _item = {
                                name: page,
                                path: _path + '/' + page,
                                component: _component,
                                $parent: pModule
                            };
                            _pages[index] = newCompMap[_path + '/' + page] = _item;
                        }
                    });
                }
                _filterConfig(pModule.children, newCompMap, pModule, _path);
            }
        });
    }

    /**
     * 设置当前项是否显示
     * @param {Array} newPageModules page module列表数据
     * @returns {Boolean} 返回该项是否可见
     */
    function _setVisible (newPageModules) {
        if (!newPageModules) {
            return false;
        }
        let _pVisible = false;
        let _mVisible = false;
        newPageModules.forEach(pModule => {
            if (pModule) {
                _pVisible = false;
                const _pages = pModule.pages;
                if (_pages) {
                    _pages.forEach(page => {
                        if (page) {
                            page.visible = keyVal ? (page.name.indexOf(keyVal) > -1) : true;
                            if (!_pVisible) {
                                _pVisible = page.visible;
                            }
                        }
                    });
                }
                _mVisible = _setVisible(pModule.children);
                pModule.visible = _pVisible || _mVisible;
                if (!_mVisible) {
                    _mVisible = pModule.visible;
                }
            }
        });
        return _mVisible;
    }
}
