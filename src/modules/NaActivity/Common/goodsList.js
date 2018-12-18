import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'GoodsList组件',
    desc: '<p>商品列表。</p>',
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
                contents: `<${getAlias(1)}-goods-list
    :col="2"
    :list="goodsData.Product"
    :templateType="NoButtons"
    :activityInfo="activityInfo"
    @click="click">
</${getAlias(1)}-goods-list>`
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: `<script>
    import ${getAlias()}GoodsList from 'goodsList/GoodsList';
    export default {
        components: {
            ${getAlias()}GoodsList
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
                    ['list', 'Y', '商品列表', 'Array', '', ''],
                    ['templateType', 'Y', '模板类型(Minimalist:极简版; NoButtons:无按钮版;NoPromotional:无促销语版;Complete:完整版)', 'String', 'Minimalist|NoButtons|NoPromotional|Complete', ''],
                    ['col', 'Y', '列数', 'Number', '1|2|3', ''],
                    ['showProgress', 'N', '是否显示进度条', 'Boolean', 'true|false', 'true'],
                    ['dataFilter', 'N', '过滤商品', 'Function', '', {
                        type: 'pre',
                        contents: `(item, col, templateType, activityInfo) => {
    let _that = this;
    return Object.assign({}, item, {
        imgUrl: item.Image,
        nameText: filterGoodsName(item),
        extraNameText: item.TireSize || '',
        price: item.Price,
        oldPrice: item.MarketingPrice,
        status: filterStatus(item),
        rate: parseInt(item.Percent) || 0,
        tags: filterTagList(item, col, templateType),
        showAdapter: filterAdapter(item, activityInfo),
        showProgress: filterShowProgress(item, col),
        brand: (item.IsBrandName && item.Brand && item.Brand.split('/')[0]) || ''
    });
}`
                    }],
                    ['tagFilter', 'N', '过滤标签tags', 'Function', '', {
                        type: 'pre',
                        contents: `(tagItem) => {
    if (tagItem instanceof Object) {
        !tagItem.nameText && (tagItem.Tab !== '适配') && (tagItem.nameText = tagItem.Tab);
        (typeof tagItem.styleType === 'undefined') && (tagItem.styleType = 2);
    }
    return tagItem;
}`
                    }]
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
