import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'Ernie组件',
    desc: '<p>摇奖机模块。</p>',
    contents: [
        {
            name: 'Dependencies',
            contents: [{
                type: 'router',
                link: `${getAlias()}-ErnieMachine`,
                contents: `${getAlias()}ErnieMachine`
            }, {
                type: 'router',
                link: `${getAlias()}-ImgBox`,
                contents: `${getAlias()}ImgBox`
            }, {
                type: 'router',
                link: `${getAlias()}-RaceLamp`,
                contents: `${getAlias()}RaceLamp`
            }, {
                type: 'router',
                link: `${getAlias()}-ShakeBall`,
                contents: `${getAlias()}ShakeBall`
            }]
        },
        {
            name: 'Example',
            contents: [{
                type: 'desc',
                contents: 'template:'
            }, {
                type: 'pre',
                contents: `<${getAlias(1)}-ernie
    :item-data="myItemData"
    :start-cb="startCb"
    :status.sync="myStatus"
    :share-cb="shareCb"
    :data-filter="dataFilter"
    @click="click">
</${getAlias(1)}-ernie>`
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: `<script>
    import ${getAlias()}Ernie from 'ernie/Ernie';
    export default {
        components: {
            ${getAlias()}Ernie
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
                    ['itemData', 'Y', '摇奖机数据', 'Object', '', ''],
                    ['status', 'N', '摇奖状态（0为未开始，1为开始，3为已结束）', 'Number', '', '0'],
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
