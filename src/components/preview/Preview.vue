<template>
    <div class="dcs_preview">
        <div class="dc_preview-phone">
            <div class="dc_phone-demo">
                <iframe frameborder="0"
                    width="100%"
                    height="100%"
                    scrolling="no"
                    :src="ifrSrc">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script>
// 预览的baseUrl
const BASE_URL = 'https://didi.github.io/cube-ui/example/#';

export default {
    name: 'dc-preview',
    data () {
        return {
            hash: '/'
        };
    },
    computed: {
        ifrSrc () {
            const _that = this;
            return BASE_URL + _that.hash;
        }
    },
    watch: {
        '$route': {
            handler(to, from) {
                const _that = this;
                _that.hash = BASE_URL + to && to.path;
            },
            immediate: true
        }
    }
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";

.dcs_preview {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .dc_preview-phone {
        width: 330px;
        height: 645px;
        margin: 0 56px 0 26px;
        background: url('https://didi.github.io/cube-ui/img/iphoneX.38c8778.png') no-repeat center / contain;
        position: relative;
    }
    .dc_phone-demo {
        position: absolute;
        top: 65px;
        left: 21px;
        right: 23px;
        bottom: 36px;
    }
}
</style>
