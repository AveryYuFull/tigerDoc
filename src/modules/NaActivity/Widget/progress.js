import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'Progress组件',
    desc: '<p>进度条（商品项标题在用）</p>',
    contents: [
        // {
        //     name: 'Dependencies',
        //     contents: []
        // },
        {
            name: 'Example',
            contents: [{
                type: 'desc',
                contents: 'template:'
            }, {
                type: 'pre',
                contents: `<${getAlias(1)}-progress
    :rate="rate" 
    :showProgress="showProgress">
</${getAlias(1)}-progress>`
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: `<script>
    import ${getAlias()}Progress from 'progress/Progress';
    export default {
        components: {
            ${getAlias()}Progress
        },
        data() {
            return {
                rate: 50,
                showProgress: true
            }
        }
    };
</script>`
            }]
        },
        {
            type: 'table',
            name: 'Props',
            titles: TABLE_TITLES.PROPS,
            contents: generateTableMap(
                [
                    ['rate', 'N', '进度数值', 'Number', '0-100', '0'],
                    ['showProgress', 'N', '是否显示进度条', 'Boolean', 'true|false', 'true']
                ],
                TABLE_CONTENT_ATTR_MAP.PROPS,
            )
        },
        // {
        //     type: 'table',
        //     name: 'Events',
        //     titles: TABLE_TITLES.EVENTS,
        //     contents: []
        // },
        // {
        //     type: 'table',
        //     name: 'Methods',
        //     titles: TABLE_TITLES.METHOD,
        //     contents: []
        // },
        {
            type: 'table',
            name: 'Projects',
            titles: TABLE_TITLES.PROJECTS,
            contents: generateTableMap(
                [
                    [
                        'NaActivity',
                        '活动页',
                        {
                            type: 'url',
                            // link: '#',
                            contents: 'https://wxdev.tuhu.work/vue/vueTest/pages/home/index?_project=NaActivity&id=A58F8C8A'
                        }
                    ]
                ],
                TABLE_CONTENT_ATTR_MAP.PROJECTS,
            )
        },
        {
            name: 'Backers',
            contents: [{
                type: 'desc',
                contents: ''
            }]
        }
    ]
};
