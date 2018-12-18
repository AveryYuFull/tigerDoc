import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

const tpls = `<${getAlias(1)}-box-button
    :nameText="'未开始'">
</${getAlias(1)}-box-button>`;

const script = `<script>
    import ${getAlias()}BoxButton from 'boxButton/BoxButton';
    export default {
        components: {
            ${getAlias()}BoxButton
        }
    };
</script>`;

export default {
    name: 'BoxButton组件',
    desc: '<p>按钮</p>',
    contents: [
        {
            name: 'Dependencies',
            contents: [{
                type: 'router',
                link: 'T-button',
                contents: 'TButton'
            }]
        },
        {
            name: 'Example',
            contents: [{
                type: 'desc',
                contents: 'template:'
            }, {
                type: 'pre',
                contents: tpls
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: script
            }]
        },
        {
            type: 'table',
            name: 'Props',
            titles: TABLE_TITLES.PROPS,
            contents: generateTableMap(
                [
                    ['nameText', 'N', '按钮名称', 'String', '-', '-'],
                    ['status', 'N', '按钮状态：0绿色（未开始）;1红色（已开始）;2灰色（已结束）;3购物车', 'Number', '0|1|2|3', '1'],
                    ['className', 'N', '按钮class名称', 'String', '-', '-']
                ],
                TABLE_CONTENT_ATTR_MAP.PROPS,
            )
        },
        {
            type: 'table',
            name: 'Events',
            titles: TABLE_TITLES.EVENTS,
            contents: generateTableMap(
                [
                    [
                        'click',
                        '点击事件',
                        '$event'
                    ]
                ],
                TABLE_CONTENT_ATTR_MAP.EVENTS,
            )
        },
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
