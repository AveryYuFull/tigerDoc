<template>
  <ul>
      <li>
        <template v-for="(item, index) in contents">
            <h4 v-if="item && item.name" :key="index"> {{item.name}}</h4>
            <d-default-tpl :titles="contents.titles" v-if="isArray(item, item)" :contents="item" :key="index"></d-default-tpl>
            <d-default-tpl v-else-if="isArray(item.contents, item)" :contents="item.contents" :key="index"></d-default-tpl>
            <d-default-tpl-content v-else :contents="item" :key="index"></d-default-tpl-content>
        </template>
      </li>
  </ul>
</template>

<script>
import TplExtend from '../tplExtend/TplExtend.vue';
import DDefaultTplContent from '../defaultTplContent/DefaultTplContent'

export default {
    name: 'd-default-tpl',
    extends: TplExtend,
    components: {
        DDefaultTplContent
    },
    methods: {
    }
}
</script>

<style>

</style>