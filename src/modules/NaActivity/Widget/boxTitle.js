import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

const tpls = `<${getAlias(1)}-box-title
    :nameText="'标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题'"
    :extraNameText="'副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题'"
    :nameClass="nameClass"
    :row="row">
</${getAlias(1)}-box-title>`;

const script = `<script>
    import ${getAlias()}BoxTitle from 'boxTitle/BoxTitle';
    export default {
        components: {
            ${getAlias()}BoxTitle
        }
    };
</script>`;

export default {
    name: 'BoxTitle组件',
    desc: '<p>公共标题（如：商品标题）</p>',
    contents: [
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
                    ['nameText', 'Y', '标题文本', 'String', '-', '-'],
                    ['extraNameText', 'N', '子标题', 'Number', '-', '-'],
                    ['nameClass', 'N', '标题class名称', 'String', '-', '-'],
                    ['row', 'N', '标题显示的行数', 'Number', '-', '2']
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
