<template>
    <ul class="dcs_treeMenu"
        v-if="itemData && itemData.length > 0">
        <li class="dc-treeMenu-item"
            :key="index"
            v-for="(item, index) in itemData"
            v-if="item">
            <div class="dc_item-name"
                :class="{'dc_title_active': item.isRootActive, 'dc_title_rotate': visibles[index]}"
                @click="toggleNav($event, index)"
                v-text="item.name"
                v-if="item.name">
            </div>
            <!-- <transition
                v-bind:css="false"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave"
            > -->
            <!-- <div class="dc_item-subItem" :class="{'dc_item-collapse': !visibles[index]}"> -->
            <div class="dc_item-subItem" v-show="visibles[index]">
                <div>
                    <ul>
                        <li :key="subIndex"
                            v-for="(subItem, subIndex) in (item.pathPages || [])"
                            v-if="subItem">
                            <router-link class="dc_subItem-name"
                                active-class="dc-subItem-active"
                                :to="subItem.path"
                                v-text="subItem.name">
                            </router-link>
                        </li>
                    </ul>
                    <dc-tree-menu :item-data="item.children"></dc-tree-menu>
                </div>
            </div>
            <!-- </transition> -->
        </li>
    </ul>
</template>

<script>
// import velocity from 'velocity-animate';

export default {
    name: 'dc-tree-menu',
    props: {
        itemData: {
            type: Array
        }
    },
    data () {
        const _that = this;
        return {
            visibles: (new Array(_that.itemData && _that.itemData.length)).fill(true)
        };
    },
    methods: {
        toggleNav (evt, index) {
            const _that = this;
            if (evt) {
                evt.preventDefault();
                evt.stopPropagation();
            }
            _that.$set(_that.visibles, index, !_that.visibles[index]);
        }
        // beforeEnter (el) {
        //     el.style.height = 0;
        // },
        // enter (el, done) {
        //     Velocity(
        //         el,
        //         { height: el.firstChild.clientHeight, duration: 500 },
        //         { complete: done }
        //     );
        // },
        // leave (el, done) {
        //     Velocity(
        //         el,
        //         { height: '0px', duration: 100 },
        //         { complete: done }
        //     );
        // }
    }
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";

.dcs_treeMenu {
    cursor: pointer;
    .dc-treeMenu-item {
    }
    .dc_item-name {
        font-size: 16px;
        font-weight: 400;
        color: $color2f;
        padding: 5px 10px 5px 0;
        border-bottom: 1px solid #e3e3e3;
        margin-right: 30px;
        position: relative;
        &.dc_title_active {
            color: $colorFC9;
            &::after {
                border-top-color: $colorFC9;
            }
        }
        &.dc_title_rotate {
            &::after {
                transform: rotate(180deg);
                top: 32%;
            }
        }
        &::after {
            content: '';
            width: 0;
            height: 0;
            border: 5px solid transparent;
            border-top-color: $color3;
            position: absolute;
            right: 0;
            top: 65%;
            transform: translateY(-50%);
            transition: all .5s;
        }
    }
    .dc_item-subItem {
        overflow: hidden;
        padding: 2px 0 0 10px;
        font-size: $FontSize13;
        line-height: 18px;
        color: $color828;
        font-weight: 600;
        transition: height .5s;
        // &.dc_item-collapse {
        //     // display: none;
        //     height: 0;
        // }
        // &.dc_item-subItem-enter-active, &.dc_item-subItem-leave-active {
        //     transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        // }
        // &.dc_item-subItem-enter {
        //     // height: auto;
        //     transform: translateY(auto);
        // }
        // &.dc_item-subItem-leave {
        //     height: 0;
        // }
    }
    .dc_subItem-name {
        display: block;
        padding: 5px 10px 5px 0;
        &.dc-subItem-active {
            // background: $colorECE;
            background: rgba(252,145,83,.2);
            position: relative;
            color: $colorFC9;
            &::after {
                content: '';
                width: 3px;
                height: 100%;
                background-color: $colorFC9;
                position: absolute;
                z-index: 1;
                right: 0;
                top: 0;
            }
        }
    }
}
</style>
