<template>
    <p class="dcs_img">
        <template v-if="isArray(contents)">
            <d-img v-for="(item, index) in contents" :contents="item" :key="index"></d-img>
        </template>
        <template v-else-if="isArray(contents && contents.contents)">
            <d-img v-for="(item, index1) in contents.contents" :contents="item" :key="index1"></d-img>
        </template>
        <template v-else-if="_srcFilter(contentFilter(contents))">
            <a v-if="_urlFilter(contentFilter(contents))" :href="_urlFilter(contentFilter(contents))" target="_blank">
                <img  :src="_srcFilter(contentFilter(contents))"/>
            </a>
            <img v-else :src="_srcFilter(contentFilter(contents))"/>
        </template>
    </p>
</template>

<script>
import TplExtend from '../tplExtend/TplExtend.vue';

export default {
    name: 'd-img',
    extends: TplExtend,
    methods: {
        _srcFilter(item) {
            let res = '';
            if (item) {
                if (item.contents) {
                    res = item.contents;
                }
            }
            return res || '';
        },
        _urlFilter(item) {
            let res = '';
            if (item) {
                if (item.link) {
                    res = item.link;
                }
            }
            return res || '';
        },
        _htmlFilter(item) {
            return item.contents || '--';
        }
    }
}
</script>

<style>

</style>