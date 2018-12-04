<template>
    <div class="acs_layout-box" ref="hookBox">
        <slot name="hookHd"></slot>
        <slot></slot>
        <slot name="hookFt"></slot>
    </div>
</template>

<script>
// import AcLayoutExtend from '../layoutExtend/LayoutExtend';
export default {
    // extends: AcLayoutExtend,
    props: {
        scrollTop: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            tempScrollTop: 0,
            isInit: false,
            myScrollTop: this.scrollTop
        };
    },
    mounted() {
        this.initScroll();
    },
    watch: {
        scrollTop(nowVal) {
            this.setScroll();
            this.myScrollTop = nowVal;
        },
        myScrollTop(nowVal) {
            this.$emit('update:scrollTop', nowVal);
        }
    },
    methods: {
        /**
         * 初始化滚动条事件监听
         */
        initScroll() {
            let _that = this;
            let hookBox = _that.$refs.hookBox;
            if (hookBox && !_that.isInit) {
                _that.isInit = true;
                hookBox.addEventListener('scroll', (evt) => {
                    if (_that.lock) {
                        return;
                    }
                    let scrollTop = evt.target && evt.target.scrollTop;
                    if (Math.abs((_that.tempScrollTop - scrollTop) || 0) > 20) {
                        _that.tempScrollTop = scrollTop;
                        _that.myScrollTop = scrollTop;
                    }
                });
                _that.myScrollTop += 1;
            }
        },
        /**
         * 设置滚动条位置
         */
        setScroll() {
            let _that = this;
            let hookBox = _that.$refs.hookBox;
            if (hookBox && !_that.lock) {
                let distance = _that.scrollTop - _that.myScrollTop;
                if (Math.abs((distance) || 0) > 10) {
                    _that.lock = true;
                    let end = _that.scrollTop;
                    end = end - 44; // 顶部保留位置
                    _setScroll(end, hookBox.scrollTop, end, () => {});
                    setTimeout(() => {
                        _that.lock = false;
                    }, 0);
                }
            }
            /**
             * 设置滚动条位置
             * @param {number} m 相差的距离
             * @param {number} top 顶部距离
             * @param {number} end 结束的位置
             * @param {Function} cb 完成的回调
             */
            function _setScroll(m, top, end, cb) {
                let n = m - top;
                let tempTop = top + n;
                hookBox.scrollTop = tempTop;
                if ((n > 0 && tempTop >= end) || (n < 0 && tempTop <= end)) {
                    if (cb instanceof Function) {
                        cb();
                    }
                }
            }

            // /**
            //  * 设置滚动条位置
            //  * @param {Number} dis 距离
            //  * @param {Number} end 结束的位置
            //  */
            // function setScrollTop(dis, end) {
            //     requestAnimationFrame(() => {
            //         if (dis < 1) {
            //             return;
            //         }
            //         const top = end - dis;
            //         if (top < 0) {
            //             hookBox.scrollTop = end;
            //         } else {
            //             hookBox.scrollTop = top;

            //             setScrollTop(dis);
            //         }
            //     });
            // }
        }
    }
};
</script>

<style lang="scss">
    // .acs_layout-box{
    //     height:100%;
    //     width:100%;
    // }
</style>
