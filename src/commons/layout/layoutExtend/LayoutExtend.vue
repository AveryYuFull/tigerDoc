<script>
export default {
    // model: {
    //     prop: 'scrollTop',
    //     event: 'valueChange'
    // },
    props: {
        scrollTop: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            myScrollTop: this.scrollTop
        };
    },
    watch: {
        scrollTop(nowVal) {
            this.myScrollTop = nowVal;
        },
        myScrollTop(nowVal) {
            this.$emit('update:scrollTop', nowVal);
        }
    }
};
</script>
