<template>
    <div class="dcs_searchBox">
        <input class="dc_searchBox-input" type="text"
            :placeholder="placeholder"
            v-model="myValue" />
        <div class="dc_searchBox-clearIcon"
            @click="clearData"
            v-show="myValue && myValue.trim()">
        </div>
    </div>
</template>

<script>
export default {
    name: 'dc-search-box',
    model: {
        prop: 'mValue',
        event: 'valueChange'
    },
    props: {
        placeholder: {
            type: String,
            default: 'Filter'
        },
        mValue: {
            type: String
        }
    },
    data () {
        const _that = this;
        return {
            myValue: _that.mValue
        };
    },
    watch: {
        mValue (nowVal) {
            const _that = this;
            _that.myValue = nowVal;
        },
        myValue(nowVal) {
            const _that = this;
            _that.$emit('valueChange', nowVal);
        }
    },
    methods: {
        /**
         * 清除数据
         */
        clearData () {
            const _that = this;
            _that.myValue = '';
        }
    }
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";
.dcs_searchBox {
    background: $colorF7F;
    border: 1px solid $colorECE;
    border-radius: 2px;
    position: relative;
    .dc_searchBox-input {
        font-size: $smallFontSize;
        color: $color828;
        padding: 5px;
        display: block;
        width: 100%;
        box-sizing: border-box;
        outline: none;
        border: 0px;
        height: 26px;
    }
    .dc_searchBox-clearIcon {
        &::after {
            content: '\2716';
            width: 13px;
            height: 0;
            position: absolute;
            top: 13%;
            right: 5px;
            transform: translateY(-50%) scale(0.9);
            color: $color868;
            font-size: 14px;
        }
    }
}
</style>
