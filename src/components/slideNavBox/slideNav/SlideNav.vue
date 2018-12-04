<template>
    <div class="dcs_slideNav"
        v-if="pageModules && pageModules.length > 0">
    <div class="dc_slideNav-item"
        :key="index"
        v-for="(item, index) in pageModules">
        <div class="dc_item-title">
            <div class="dc_title-text" v-text="item.name" v-if="item.name"></div>
            <div class="dc_title-toggleV">版本切换</div>
        </div>
        <dc-tree-menu
            :item-data="item.children">
        </dc-tree-menu>
    </div>
    </div>
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
    },
    mounted () {
        console.log('pageModules-->', this.pageModules);
    }
};
</script>
