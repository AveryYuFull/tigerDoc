<template>
    <ul class="dcs_slideNav"
        v-if="pageModules && pageModules.length > 0">
        <li class="dc_slideNav-navItem"
            :key="index"
            v-for="(item, index) in pageModules">
            <div class="dc_navItem-title">
                <div class="dc_title-text"
                    :class="{'dc_title_active': item.isRootActive}"
                    v-text="item.name" v-if="item.name"></div>
                <div class="dc_title-toggleV">版本切换</div>
            </div>
            <dc-tree-menu
                :item-data="item.children">
            </dc-tree-menu>
        </li>
    </ul>
</template>

<script>
import DcTreeMenu from './treeMenu/TreeMenu';

export default {
    name: 'dc-slide-nav',
    components: {
        DcTreeMenu
    },
    props: {
        pageModules: {
            type: Array
        }
    }
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";

.dcs_slideNav {
    .dc_slideNav-navItem {
    }
    .dc_navItem-title {
        font-family: -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
            "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
        color: $color828;
        -webkit-font-smoothing: antialiased;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        font-size: $smallFontSize;
        font-weight: normal;
        text-align: left;
        padding: 5px 0 13px;
        margin: 20px 0px 0px;
        overflow: hidden;
    }
    .dc_title-text {
        display: inline-block;
        font-size: $largeFontSize;
        font-weight: 400;
        &.dc_title_active {
            color :$colorFC9;
        }
    }
    .dc_title-toggleV {
        display: inline-block;
    }
}
</style>
