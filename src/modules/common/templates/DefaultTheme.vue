<template>
    <div class="dcs_default-theme" v-if="data">
        <h1>{{data.name}}</h1>
        <div class="dc_default-desc" v-if="data.desc" v-html="data.desc"></div>
        <template v-if="data && data.type === 'markdown'">
            <d-markdown :contents="data.contents"></d-markdown>
        </template>
        <template v-else v-for="(item, index) in data.contents">
            <div class="de_default-module" :key="index">
                <h3 class="de_module-title"> {{item.name}}</h3>
                <div :titles="item.titles" :contents="item.contents" :key="index" :is="filterComponentName(item)"></div>
            </div>
        </template>
    </div>
</template>

<script>
import DTable from './table/Table';
import DDefaultTpl from './defaultTpl/DefaultTpl';
import DMarkdown from './markdown/Markdown';
import DUrl from './url/Url';
import DImg from './img/Img';
import componentNameFilter from '../filters/componentName.filter.js';

export default {
    props: {
        data: {
            type: Object
        }
    },
    components: {
        DTable,
        DDefaultTpl,
        DMarkdown,
        DUrl,
        DImg
        // DDefaultTplContent
    },
    methods: {
        filterComponentName(item) {
            let res = componentNameFilter(item);
            return res || 'd-default-tpl';
        }
    }
};
</script>

<style lang="scss">
.dcs_default-theme {
    padding: 54px 30px 30px;
    max-width: 880px;
    box-sizing: border-box;
    * {
      box-sizing: border-box;
    }
    .de_default-module {
      .de_module-title {
        margin: 55px 0 20px;
        font-weight: 400;
        color: #1f2f3d;
        font-size: 22px;
      }
    }
    pre {
        padding: 0;
    }
}
</style>
