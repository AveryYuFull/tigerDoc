<template>
	<div class="dcs_table">
        <table>
            <thead>
                <tr>
                    <th v-for="(item, index) in titles" :key="index" :style="getStyle(item)">{{getName(item)}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in contents" :key="index">
                    <template v-for="(titelItem, key) in titles">
                        <td :key="key">
                            <d-default-tpl-content :contents="_htmlFilter(item, getKey(titelItem))"></d-default-tpl-content>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import TplExtend from '../tplExtend/TplExtend.vue'
import DDefaultTplContent from '../defaultTplContent/DefaultTplContent'

export default {
    name: 'd-table',
    extends: TplExtend,
    components: {
        DDefaultTplContent
    },
    methods: {
        _htmlFilter(item,key) {
            let data = '';
            if (item && key && item[key]) {
                data = item[key];
            }
            return data
        },
        getKey(item) {
            let key = ''
            if (item instanceof Object) {
            key = item['key']
            }
            return key;
        },
        getName(item) {
            let _name = '-'
            if (item instanceof Object) {
            _name = item.name
            }
            return _name;
        },
        getStyle(item) {
            let res = {}
            if (item && item.width) {
            res.width = item.width
            }
            return res
        }
    }
}
</script>

<style lang="scss">
.dcs_table {
    border-collapse:collapse;
    table-layout: fixed;
    box-sizing: border-box;
    width: 100%;
    table{
        width: 100%;
    }
    th{
        min-width: 60px;
        &:first-child{
            width: 20%
        };
    }
    tr{
        border-top: none;
    }
    th,td{
        font-size: 14px;
        text-align: left;
        border: {
          left: none;
          top: none;
          right: none;
        };
    }
    // pre {
    //     margin: 0;
    //     padding: 2px;
    //     border: 1px solid #e7e7e7;
    //     border-radius: 4px;
    // }
}
</style>