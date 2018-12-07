<template>
    <div class="dcs_document">
        <dc-slide-nav-box
            class="dc_document-slideNav"
            :page-modules="pageModules"
            :component-map="componentMap">
        </dc-slide-nav-box>
        <div class="dc_layout-doc">
            <router-view></router-view>
        </div>
        <div class="dc_layout-preview">
            <dc-preview></dc-preview>
        </div>
    </div>
</template>

<script>
import DcSlideNavBox from '@/components/slideNavBox/SlideNavBox';
import pageModules from '@/modules';
import DcPreview from '../../components/preview/Preview';

export default {
    name: 'dc-document',
    components: {
        DcSlideNavBox,
        DcPreview
    },
    data () {
        return {
            pageModules: pageModules.pageModules,
            componentMap: pageModules.componentMap
        };
    }
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";

.dcs_document {
    height: calc(100vh - 70px);
    background-color: $colorF7F;
    display: flex;
    flex: 1 1 0%;
    outline: none;
    overflow: hidden;
    user-select: text;
    flex-direction: row;
    .dc_document-slideNav {
        overflow: auto;
        position: relative;
        outline: none;
        width: 264px;
        padding: 10px 0 10px 10px;
        background: $colorFBF;
    }
    .dc_layout-doc {
        overflow: auto;
        flex: 1;
    }
}
</style>
