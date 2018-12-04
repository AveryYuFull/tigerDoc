<template>
    <div class="acs_layout-content-wrap">
        <div class="ac_layout-content">
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

.ac_layout-content{
    display: inline-block;
    width: 100%;
}

</style>
