<script>
import htmlFilter from '../../filters/html.filter.js'
import contentFilter from '../../filters/content.filter.js';
export default {
    props: {
        titles: {},
        contents: {}
    },
    methods: {
        isArray(item, data) {
            let res = (item instanceof Array);
            if (res) {
                switch (item && item.type) {
                    case 'table':
                        res = false;
                        break;
                    default:
                        break;
                }
            }
            return res;
        },
        htmlFilter(item, key) {
            return htmlFilter(item, key);
        },
        contentFilter(item) {
            return contentFilter(item)
        }
    }
}
</script>