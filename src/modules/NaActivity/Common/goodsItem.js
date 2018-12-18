import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'GoodsItem组件',
    desc: '<p>单个商品模版。</p>',
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
                contents: `<${getAlias(1)}-goods-item
    :templateType="templateType"
    :col="1"
    :goodsItem="filterGoods(item)"
    :tagFilter="tagFilter"
    :activityInfo="activityInfo"
    @click="click">
</${getAlias(1)}-goods-item>`
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: `<script>
    import ${getAlias()}GoodsItem from 'goodsItem/GoodsItem';
    export default {
        components: {
            ${getAlias()}GoodsItem
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
                    ['activityInfo', 'Y', '活动信息', 'Object', '', ''],
                    ['goodsItem', 'Y', '商品项数据', 'Object', '', ''],
                    ['templateType', 'Y', '模板类型(Minimalist:极简版; NoButtons:无按钮版;NoPromotional:无促销语版;Complete:完整版)', 'String', 'Minimalist|NoButtons|NoPromotional|Complete', ''],
                    ['col', 'Y', '列数', 'Number', '1|2|3', ''],
                    ['showProgress', 'N', '是否显示进度条', 'Boolean', 'true|false', 'true'],
                    ['promotionalAd', 'N', '促销语', 'String', '', ''],
                    ['tagFilter', 'N', '过滤标签tags', 'Function', '', '']
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
