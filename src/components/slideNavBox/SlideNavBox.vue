<template>
    <div class="dcs_slideNavBox">
        <div class="dc_slideNavBox-content">
            <dc-search-box
                :placeholder="placeholder"
                v-model="keyVal">
            </dc-search-box>
            <dc-slide-nav
                class="dc_content-nav"
                :page-modules="myConfig.disPageModules">
            </dc-slide-nav>
        </div>
        <div class="dc_slideNavBox-drag" ref="hook_drag">
        </div>
    </div>
</template>

<script>
import DcSearchBox from './searchBox/SearchBox';
import DcSlideNav from './slideNav/SlideNav';

import initEventListener from '../../commons/utils/initEventListener';
import getEventType from '../../commons/utils/getEventType';
import filterConfig from '../../modules/common/helpers/filterConfig';

/**
 * 导航栏最大宽度／最小宽度
 */
const NAV_LIMIT_WIDTH = {
    min: 150,
    max: 565
};

// 记录激活的菜单
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
        config: {
            type: Object
        },
        /**
         * 是否使用drag元素注册事件
         */
        useDragElem: {
            type: Boolean,
            default: false
        }
    },
    data () {
        const _that = this;
        return {
            posX: 0, // 记录拖动导航的位置
            dragable: false, // 导航是否可以拖动
            keyVal: '', // 关键字
            myConfig: _that.config || {}
        };
    },
    mounted () {
        const _that = this;
        const { EVENT_START, EVENT_MOVE, EVENT_END } = getEventType();
        _that.evtType = {
            start: EVENT_START,
            move: EVENT_MOVE,
            end: EVENT_END
        };

        _that._watchRoute();
        _that._initEventListener(); // 注册事件
    },
    beforeDestroy () {
        const _that = this;
        _that._initEventListener(false); // 取消事件
    },
    methods: {
        /**
         * 监听
         */
        _watchRoute () {
            const _that = this;
            _that.$watch('$route.path', (newPath) => {
                let _newPath = newPath;
                _that._setRootStatus(_newPath);
            }, {immediate: true});
        },
        /**
         * 设置当前项的root项的状态
         * @param {String} newPath 当前路由
         */
        _setRootStatus (newPath) {
            const _that = this;
            const _comMap = _that.myConfig.disComponentMap;
            if (rootNav && rootNav.length > 0) {
                rootNav.forEach(root => {
                    root && (root.isRootActive = false);
                });
            }
            rootNav = [];
            let _parent = ((_comMap && _comMap[newPath]) || {}).$parent;
            do {
                if (!_parent) {
                    break;
                }
                _that.$set(_parent, 'isRootActive', true);
                rootNav.push(_parent);
                _parent = _parent.$parent;
            } while (_parent);
        },
        /**
         * 注册／取消事件监听
         * @param {Boolean} flag (flag=true 监听事件, flag=false 取消事件)
         * @private
         */
        _initEventListener (flag = true) {
            const _that = this;
            const _dragElem = _that.$refs['hook_drag'];
            const _target = (_that.useDragElem && _dragElem) || window;
            const { start, move, end } = _that.evtType;
            initEventListener(_dragElem, start, _that, flag);
            initEventListener(_target, move, _that, flag);
            initEventListener(_target, end, _that, flag);
        },
        /**
         * 处理事件回调
         * @param {Event} evt 事件对象
         * @private
         */
        handleEvent (evt) {
            const _that = this;
            const _type = (evt && evt.type) || '';
            const { start, move, end } = _that.evtType;
            switch (_type) {
                case start:
                    _that._start(evt);
                    break;
                case move:
                    _that._move(evt);
                    break;
                case end:
                    _that._end(evt);
                    break;
            }
        },
        /**
         * 开始拖动前
         * @param {Event} evt 事件对象
         */
        _start (evt) {
            const _that = this;
            _that.dragable = true;
            _that.posX = (evt && evt.pageX) || 0;
        },
        /**
         * 拖动
         * @param {Event} evt 事件对象
         */
        _move (evt) {
            const _that = this;
            if (_that.dragable) {
                const _navEl = _that.$el;
                let _cW = _navEl.clientWidth;
                const _cPos = (evt && evt.pageX) || 0;
                let deltaX = _that.posX ? _cPos - (_that.posX || 0) : 0;
                _that.posX = _cPos;
                _cW = _cW + deltaX;
                if (_cW >= NAV_LIMIT_WIDTH.min && _cW <= NAV_LIMIT_WIDTH.max) {
                    _that.$el.style.width = _cW + 'px';
                }
            }
        },
        /**
         * 拖动结束
         * @param {Event} evt 事件对象
         */
        _end (evt) {
            const _that = this;
            _that.dragable = false;
        }
    },
    watch: {
        keyVal (nowVal) {
            const _that = this;
            const _myConfig = _that.myConfig;
            if (_myConfig) {
                _that.myConfig = filterConfig(_myConfig.pageModules, _myConfig.componentMap, nowVal);
                _that._setRootStatus(_that.$route.path);
            }
        }
    }
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";

.dcs_slideNavBox {
    display: flex;
    width: 264px;
    height: 100%;
    .dc_slideNavBox-content {
        overflow: auto;
        height: 100%;
        flex: 1;
    }
    .dc_content-nav {
    }
    .dc_slideNavBox-drag {
        width: 17px;
        height: 100%;
        background: #fbf5f5;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-top: 0;
        border-bottom: 0;
        cursor: col-resize;
        position: relative;
        &::after  {
            content: '';
            width: 0;
            height: 35px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 50%;
            left: 30%;
            transform: translate3d(-50%, -50%, 0) scale(.5);
        }
        &::before {
            content: '';
            width: 0;
            height: 35px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 50%;
            left: 70%;
            transform: translate3d(-50%, -50%, 0) scale(.5);
        }
    }
}
</style>
