<template>
    <div class="acs_layout-header-wrap">
        <div class="ac_layout-header">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";

.acs_layout-header-wrap {
    display: block;
    overflow: hidden;
    height: $headerHeight;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    &~.acs_layout-content-wrap{
        padding-top: $headerHeight;
    }
    .ac_layout-header {
        // max-width: $maxWidth;
        height: 100%;
        // margin: 0 auto;
    }
}
</style>
