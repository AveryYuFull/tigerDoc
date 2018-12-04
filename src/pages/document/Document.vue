<template>
    <div class="dcs_document">
        <dc-slide-nav-box
            :page-modules="pageModules">
        </dc-slide-nav-box>
    </div>
</template>

<script>
import DcSlideNavBox from '@/components/slideNavBox/SlideNavBox';
import pageModules from '@/modules';

export default {
    name: 'dc-document',
    components: {
        DcSlideNavBox
    },
    data () {
        return {
            pageModules: pageModules.pageModules
        };
    }
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";

</style>
