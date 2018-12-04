<template>
    <div class="dcs_treeMenu"
        v-if="itemData && itemData.length > 0">
        <div class="dc-treeMenu-item"
            :key="index"
            v-for="(item, index) in itemData"
            v-if="item">
            <div class="dc_item-name" v-text="item.name" v-if="item.name"></div>
            <div class="dc_item-subItem"
                :key="subIndex"
                v-for="(subItem, subIndex) in (item.pages || [])"
                v-if="subItem">
                <div class="dc_subItem-name" v-text="subItem"></div>
            </div>
            <dc-tree-menu :item-data="item.children"></dc-tree-menu>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dc-tree-menu',
    props: {
        itemData: {
            type: Array
        }
    }
};
</script>
