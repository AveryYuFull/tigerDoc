<template>
    <div class="dcs_slideNavBox">
        <dc-search-box
            :placeholder="placeholder">
        </dc-search-box>
        <dc-slide-nav
            class="dc_slideNavBox-nav"
            :page-modules="pageModules">
        </dc-slide-nav>
    </div>
</template>

<script>
import DcSearchBox from './searchBox/SearchBox';
import DcSlideNav from './slideNav/SlideNav';

let rootNav = [];

export default {
    name: 'dc-slide-nav-box',
    components: {
        DcSearchBox,
        DcSlideNav
    },
    props: {
        placeholder: {
            type: String
        },
        pageModules: {
            type: Array
        },
        componentMap: {
            type: Object
        }
    },
    mounted () {
        const _that = this;
        const _navList = _that.pageModules;
        const _comMap = _that.componentMap;
        _that.$watch('$route.path', (newPath) => {
            // let _pathArr = newPath && newPath.split('/');
            let _newPath = newPath;
            if (rootNav && rootNav.length > 0) {
                rootNav.forEach(root => {
                    if (root) {
                        root.isRootActive = false;
                    }
                });
            }
            rootNav = [];
            let _parent = (_comMap && _comMap[_newPath]).$parent;
            do {
                if (!_parent) {
                    break;
                }
                _that.$set(_parent, 'isRootActive', true);
                rootNav.push(_parent);
                _parent = _parent.$parent;
            } while (_parent);
            // if (_pathArr && _pathArr.length > 0) {
            //     _pathArr.forEach(path => {
            //         if (path) {
            //             const _root = seekRoot(_navList, path);
            //             if (_root) {
            //                 rootNav.push(_root);
            //                 _that.$set(_root, 'isRootActive', true);
            //             }
            //         }
            //     });
            // }

            /**
             * 搜索root元素
             * @param {Array} navList 导航列表
             * @param {String} path 目标path
             * @param {Object} root 目标元素root
             * @returns {Object} 返回root元素对象
             */
            // function seekRoot (navList, path) {
            //     if (!navList || !path) {
            //         return null;
            //     }

            //     for (let i = 0; i < navList.length; i++) {
            //         const _nav = navList[i];
            //         if (_nav.name === path) {
            //             return _nav;
            //         }
            //         return seekRoot(_nav.children, path);
            //     }
            // };
        }, {immediate: true});
    }
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";

.dcs_slideNavBox {
    .dc_slideNavBox-nav {

    }
}
</style>
