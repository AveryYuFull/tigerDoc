<template>
  <div class="dcs_app">
    <dc-layout
        class="dc_app-layout"
        :is-header="true">
        <dc-page-header
            class="dc_layout-header"
            slot="hookHd">
        </dc-page-header>
        <router-view />
    </dc-layout>
  </div>
</template>

<script>
import DcLayout from './commons/layout/Layout';
import DcPageHeader from './components/pageHeader/PageHeader';

export default {
    name: 'App',
    components: {
        DcLayout,
        DcPageHeader
    }
};
</script>

<style lang="scss">
@import "style/_public/_var.scss";
@import "style/_public/_mixin.scss";
@import "style/_public/_iconFont.scss";

.dcs_app {
    .dc_app-layout {
        .acs_layout-header-wrap {
            height: 70px;
            line-height: 70px;
            padding: 0 100px;
            margin-top: 0;
            background-color: $colorf;
            box-shadow: 0 1px 2px rgba(0,0,0,.15);
        }
    }

}
</style>
