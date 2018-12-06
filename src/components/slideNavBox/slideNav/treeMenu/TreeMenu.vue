<template>
    <ul class="dcs_treeMenu"
        v-if="itemData && itemData.length > 0">
        <li class="dc-treeMenu-item"
            :key="index"
            v-for="(item, index) in itemData"
            v-if="item">
            <div class="dc_item-name"
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
                            v-for="(subItem, subIndex) in (item.pages || [])"
                            v-if="subItem">
                            <router-link :to="subItem">
                                <div class="dc_subItem-name" v-text="subItem">
                                    <router-link :to="subItem"></router-link>
                                </div>
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
import velocity from 'velocity-animate';

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
            visibles: (new Array(_that.itemData && _that.itemData.length)).fill(false)
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
}
</style>
