<template>
    <div v-if="filterComponentName(contents) && filterComponentName(contents) !== 'div'"
        :contents="contents" :titles="contents.titles" :is="filterComponentName(contents)">
    </div>
    <div v-else v-html="_htmlFilter(contentFilter(contents))"></div>
</template>

<script>
import TplExtend from '../tplExtend/TplExtend.vue';
import DMarkdown from '../markdown/Markdown.vue';
import DTable from '../table/Table'
import DUrl from '../url/Url';
import DImg from '../img/Img';
import componentNameFilter from '../../filters/componentName.filter.js';

export default {
    extends: TplExtend,
    components: {
        DMarkdown,
        DTable,
        DUrl,
        DImg
    },
    methods: {
        _htmlFilter(item) {
            return this.htmlFilter(item)
        },
        filterComponentName(item) {
            return componentNameFilter(item) || 'div';
        }
    }
}
</script>

<style>

</style>