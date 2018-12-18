import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'NewBigHit组件',
    desc: '<p>大翻盘模块。</p>',
    contents: [
        {
            name: 'Dependencies',
            contents: [{
                type: 'router',
                link: `${getAlias()}-BigHitWheel`,
                contents: `${getAlias()}BigHitWheel`
            }]
        },
        {
            name: 'Example',
            contents: [{
                type: 'desc',
                contents: 'template:'
            }, {
                type: 'pre',
                contents: `<${getAlias(1)}-new-big-hit
    :item-data="myItemData"
    :start-cb="startCb"
    :status.sync="myStatus"
    :share-cb="shareCb"
    :data-filter="dataFilter"
    @click="click">
</${getAlias(1)}-new-big-hit>`
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: `<script>
    import ${getAlias()}NewBigHit from 'NewBigHit/NewBigHit';
    export default {
        components: {
            ${getAlias()}NewBigHit
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
                    ['itemData', 'Y', '大翻盘数据', 'Object', '', ''],
                    ['status', 'N', '摇奖状态（0为未开始，1为开始，2为隐藏还未显示反面图，3为显示反面图结束）', 'Number', '', '0'],
                    ['startCb', 'N', '开始抽奖的钩子', 'Function', '', ''],
                    ['shareCb', 'N', '分享的钩子', 'Function', '', ''],
                    ['dataFilter', 'N', '过滤数据', 'Function', '', '']
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
                contents: 'yuzhaoman'
            }]
        }
    ]
};
