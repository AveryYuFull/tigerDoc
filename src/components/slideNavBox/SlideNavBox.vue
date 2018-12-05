<template>
    <div class="dcs_slideNavBox">
        <dc-search-box
            :placeholder="placeholder">
        </dc-search-box>
        <dc-slide-nav
            class="dc_slideNavBox-nav"
            :page-modules="pageModules">
        </dc-slide-nav>
    </div>
</template>

<script>
import DcSearchBox from './searchBox/SearchBox';
import DcSlideNav from './slideNav/SlideNav';

export default {
    name: 'dc-slide-nav-box',
    components: {
        DcSearchBox,
        DcSlideNav
    },
    props: {
        placeholder: {
            type: String
        },
        pageModules: {
            type: Array
        }
    }
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";

.dcs_slideNavBox {
    .dc_slideNavBox-nav {

    }
}
</style>
