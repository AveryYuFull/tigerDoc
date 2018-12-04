<template>
    <ac-layout-box
        :scrollTop.sync="myScrollTop">
        <ac-header slot="hookHd" :class="hdClassName" v-if="myIsHeader">
            <slot name="hookHd"></slot>
        </ac-header>
        <ac-content :class="myBdClassName">
            <slot></slot>
        </ac-content>
        <ac-footer slot="hookFt" v-if="myIsFooter">
            <slot name="hookFt"></slot>
        </ac-footer>
    </ac-layout-box>
</template>

<script>
// import { Browser } from 'tiger-lib';
import AcLayoutBox from './layoutBox/LayoutBox';
import AcHeader from './header/Header';
import AcContent from './content/Content';
import AcFooter from './footer/Footer';
import AcLayoutExtend from './layoutExtend/LayoutExtend';

export default {
    extends: AcLayoutExtend,
    props: {
        bdClassName: { // 页面内容class名称
            default: ''
        },
        hdClassName: { // 页面头class名称
            default: ''
        },
        isHeader: { // 是否显示页头
            type: Boolean,
            default: true
        },
        isFooter: { // 是否显示页脚
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            // browser: Browser.browser,
            // device: Browser.device,
            myBdClassName: '',
            myIsHeader: false,
            myIsFooter: false
        };
    },
    components: {
        AcLayoutBox,
        AcHeader,
        AcContent,
        AcFooter
    },
    watch: {
        isHeader() {
            this.setShowHeader();
        },
        isFooter() {
            this.setShowFooter();
        },
        bdClassName() {
            this.setBdClass();
        }
    },
    created() {
        let _that = this;
        _that.initHtmlClassName();
        _that.setShowHeader();
        _that.setShowFooter();
    },
    methods: {
        /**
         * 初始化设备的html的className
         */
        initHtmlClassName() {
            let _html = document.documentElement;
            // this.browser.android && _html.classList.add('tiger-android');
            // this.device.ios && _html.classList.add('tiger-ios');
            // 解决ios app 没有头部问题
            // if (this.$tuhu.device().isApp && location.href.includes('navHidden=1')) {
            //     _html.classList.add('tiger-nav-hidden');
            // }
        },
        /**
         * 设置body的class
         */
        setBdClass() {
            let _that = this;
            let _bdClass = 'ac_foot-active';
            let _bdClassName = _that.bdClassName;
            let _myBdClass;
            if (_bdClassName instanceof Array) {
                _myBdClass = _bdClassName.slice();
                _that.myIsFooter && _myBdClass.push(_bdClass);
            } else if (_bdClassName instanceof Object) {
                _myBdClass = Object.assign({}, _bdClassName);
                if (_that.myIsFooter) {
                    _myBdClass[_bdClass] = true;
                }
            } else if (typeof _bdClassName === 'string') {
                _myBdClass = [_bdClassName];
                _that.myIsFooter && _myBdClass.push(_bdClass);
            }
            _that.myBdClassName = _myBdClass || {};
        },
        /**
         * 设置显示隐藏页脚
         */
        setShowFooter() {
            let _that = this;
            let _slots = _that.$slots;
            let hookFt = _that.$slots.hookFt;
            if (_that.isFooter) {
                if (hookFt && hookFt.length > 0) {
                    _that.myIsFooter = true;
                } else {
                    _that.myIsFooter = false;
                }
            } else {
                _that.myIsFooter = false;
            }
            _that.setBdClass();
        },
        /**
         * 设置显示隐藏页头
         */
        setShowHeader() {
            let _that = this;
            let _slots = _that.$slots;
            let hookHd = _that.$slots.hookHd;
            if (_that.isHeader) {
                if (hookHd && hookHd.length > 0) {
                    _that.myIsHeader = true;
                } else {
                    _that.myIsHeader = false;
                }
            } else {
                _that.myIsHeader = false;
            }
        }
    }
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";
// .tiger-ios{
//     &.tiger-nav-hidden{
//         padding-top: 22px;
//         .page {
//             ._content{
//                 top: 22px;
//             }
//         }
//     }
// }
.acs_layout-box {
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    max-width: $maxWidth;
    margin: 0 auto;
    .ac_foot-active {
        padding-bottom: $footerHeight;
    }
}
</style>
