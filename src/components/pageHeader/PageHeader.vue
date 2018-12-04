<template>
    <div class="dcs_header">
        <div class="dc_header-logo">
            <router-link class="dc_logo-link"
                :to="logoPath">
                <img class="dc_link-img"
                    :src="logo" alt="Tuhu-UI" />
            </router-link>
        </div>
        <div class="dc_header-tabs">
            <router-link class="dc_tabs-tab"
                :to="tab.path"
                :key="index"
                :class="{'dc_tabs_active': index === activeIndex}"
                v-for="(tab, index) in tabs">
                <span v-text="tab.nameText"></span>
            </router-link>
        </div>
        <div class="dc_header-toggleNav"></div>
    </div>
</template>

<script>
const defaultLogo = 'https://res.tuhu.org/vue/wx/static/img/redhu.a1d89d7.png';

export default {
    name: 'd-page-header',
    props: {
        logo: {
            type: String,
            default: defaultLogo
        }
    },
    data () {
        return {
            logoPath: '',
            tabs: [{
                nameText: '文档',
                path: '/document'
            }, {
                nameText: '示例',
                path: ''
            }],
            activeIndex: 0
        };
    }
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";

.dcs_header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    font-size: $largeFontSize;
    .dc_header-logo {
        padding: 0 16px;
        height: 100%;
    }
    .dc_logo-link {
        display: block;
        height: 100%;
        margin: 0 80px;
    }
    .dc_link-img {
        display: block;
        height: 100%;
        transform: scale(.5);
    }
    .dc_header-tabs {
        padding: 0 30px;
        box-shadow: none;
    }
    .dc_tabs-tab {
        display: inline-block;
        margin: 0 18px;
        color: $color4B4;
        transition: color .2s;
        &.dc_tabs_active {
            color: $colorFC9;
        }
    }
    .dc_header-toggleNav {
        display: none;
    }

    @media screen and (max-width: 960px) {
        display: block;
        .dc_header-logo {
            display: flex;
            justify-content: center;
        }
    }
}
</style>
