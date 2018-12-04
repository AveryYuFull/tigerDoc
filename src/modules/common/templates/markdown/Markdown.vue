<template>
    <div class="dcs_markdown">
        <template v-if="isArray(contents)">
            <div v-for="(item, index) in contents" :key="index" v-html="_htmlFilter(contentFilter(item))"></div>
        </template>
        <div v-else v-html="_htmlFilter(contentFilter(contents))"></div>
    </div>
</template>

<script>
import TplExtend from '../tplExtend/TplExtend.vue';
import 'markdown-css-themes/markdown7.css'
import hljs from 'highlight.js';
import marked from 'markdown-it';

const md = marked({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {
            }
        }

        return ''; // use external default escaping
    },
});
export default {
    extends: TplExtend,
    methods: {
        _htmlFilter(item) {
            let res = '';
            let text = '';
            if (item instanceof Object && item.contents) {
                res = md.render(item.contents);
            }
            return res;
        }
    }
}
</script>

<style>

</style>