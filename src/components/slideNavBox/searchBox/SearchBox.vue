<template>
    <div class="dcs_searchBox">
        <input class="dc_searchBox-input" type="text"
            :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    name: 'dc-search-box',
    props: {
        placeholder: {
            type: String,
            default: 'Filter'
        }
    }
};
</script>
