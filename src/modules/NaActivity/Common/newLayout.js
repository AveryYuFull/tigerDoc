import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'NewLayout组件',
    desc: '<p>页面布局组件。</p>',
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
                contents: `<${getAlias()}-new-layout
    :scrollTop="0">
</${getAlias()}-new-layout>`
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: `<script>
    import ${getAlias()}NewLayout from 'newLayout/NewLayout';
    export default {
        components: {
            ${getAlias()}NewLayout
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
                    ['scrollTop', 'Y', '距顶部的高度', 'Number', '', ''],
                    ['bdClassName', 'N', '页面内容class名称', 'String', '', '\' \''],
                    ['hdClassName', 'N', '页面头class名称', 'String', '', '\' \''],
                    ['isHeader', 'N', '是否显示页头', 'Boolean', 'true|false', 'true'],
                    ['isFooter', 'N', '是否显示页脚', 'Boolean', 'true|false', 'true']
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
