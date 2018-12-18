import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'RaceLamp组件',
    desc: '<p>摇奖机跑马灯动画组件。</p>',
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
                contents: `<${getAlias(1)}-race-lamp
    :status="myStatus"
    :marquee-lamp-is-on="marqueeLampIsOn">
</${getAlias(1)}-race-lamp>`
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: `<script>
    import ${getAlias()}RaceLamp from 'raceLamp/RaceLamp';
    export default {
        components: {
            ${getAlias()}RaceLamp
        },
        data() {
            return {
                myStatus: 0,
                marqueeLampIsOn: 1
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
                    ['raceLamps', 'N', '跑马灯的布局情况（{top, right, bottom, left}）', 'Object', '', {
                        type: 'pre',
                        contents: `{
    top: 12,
    right: 4,
    bottom: 12,
    left: 4
}`
                    }],
                    ['raceLampNum', 'N', '跑马灯数量', 'Number', '', 32],
                    ['status', 'N', '摇奖状态（0为未开始，1为开始，3为已结束）', 'Number', '0|1|3', '0'],
                    ['marqueeLampIsOn', 'N', '是否开启跑马灯效果（0为不开启，1为开启）', 'Number', '0|1', '0']
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
