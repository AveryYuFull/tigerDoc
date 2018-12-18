import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

const tpls = `<${getAlias(1)}-img-scroll
    :list="list"
    :isDark="isDark">
</${getAlias(1)}-img-scroll>`;

export default {
    name: 'ImgScroll组件',
    desc: '<p>图片滚动组件。</p>',
    contents: [
        {
            name: 'Example',
            contents: [{
                type: 'desc',
                contents: 'template:'
            }, {
                type: 'pre',
                contents: tpls
            }]
        },
        {
            type: 'table',
            name: 'Props',
            titles: TABLE_TITLES.PROPS,
            contents: generateTableMap(
                [
                    ['list', 'Y', '轮播图片地址列表', 'String', '-', '-']
                ],
                TABLE_CONTENT_ATTR_MAP.PROPS,
            )
        },
        {
            type: 'table',
            name: 'Callback',
            titles: TABLE_TITLES.CALLBACK,
            contents: generateTableMap(
                [
                    ['dataFilter', '每项数据过滤', 'item: String']
                ],
                TABLE_CONTENT_ATTR_MAP.CALLBACK,
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
                        {
                            type: 'markdown',
                            contents: `\`\`\`
{
    Event: $event,
    itemData: String
}`
                        }
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
                contents: 'chengsiyu'
            }]
        }
    ]
};
