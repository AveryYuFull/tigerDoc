<template>
    <div class="dcs_url">
        <template v-if="isArray(contents)">
            <d-url v-for="(item, index) in contents" :key="index" v-html="_htmlFilter(contentFilter(item))"></d-url>
        </template>
        <a v-else :href="_urlFilter(contentFilter(contents))" target="_blank" v-html="_htmlFilter(contentFilter(contents))"></a>
    </div>
</template>

<script>
import TplExtend from '../tplExtend/TplExtend.vue';

export default {
    name: 'd-url',
    extends: TplExtend,
    methods: {
        _urlFilter(item) {
            let res = '#';
            if (item) {
                if (item.link) {
                    res = item.link;
                } else {
                    res = item.contents;
                }
            }
            return res || '#';
        },
        _htmlFilter(item) {
            return item.contents || '--';
        }
    }
}
</script>

<style>

</style>