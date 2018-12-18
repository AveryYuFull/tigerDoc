import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'TagList组件',
    desc: '<p>商品标签列表。</p>',
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
                contents: `<${getAlias(1)}-tag-list
    :tags="tags"
    :tagFilter="tagFilter">
</${getAlias(1)}-tag-list>`
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: `<script>
    import ${getAlias()}TagList from 'tagList/TagList';
    export default {
        components: {
            ${getAlias()}TagList
        },
        data() {
            return {
                tags: [{
                    nameText: "直降137.77"
                    styleType: 1
                }, {
                    nameText: "赠"
                    styleType: 2
                }, {
                    nameText: "3期免息"
                    styleType: 2
                }],
                tagFilter: () => {}
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
                    ['tags', 'Y', '商品标签列表', 'Array', '', ''],
                    ['tagFilter', 'N', '标签过滤函数', 'Function', '', '']
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
                contents: 'pengyuying'
            }]
        }
    ]
};
