<template>
    <div class="acs_layout-footer-wrap">
        <div class="ac_layout-footer">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";

.acs_layout-footer-wrap {
    display: block;
    overflow: hidden;
    height: $footerHeight;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    .ac_layout-footer {
        max-width: $maxWidth;
        height: 100%;
        margin: 0 auto;
    }
}
</style>
