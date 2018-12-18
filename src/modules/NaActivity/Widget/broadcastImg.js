import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';


const tpls = `<${getAlias(1)}-broadcast-img-box
    :status="status"
    :imgs="imgs"
    :resultImg="lotteryMachine.ResultImgUri"
    @update:status="statusUpdate">
</${getAlias(1)}-broadcast-img-box>`;

const script = `<script>
    import ${getAlias()}BroadcastImgBox from 'broadcastImg/BroadcastImgBox';
    export default {
        components: {
            ${getAlias()}BroadcastImgBox
        },
        data() {
            return {
                status: 0,
                imgs: [[{
                    ImageUri: 'firstImg.png'
                }, {
                    ImageUri: 'secImg.png'
                }, {
                    ImageUri: 'thirdImg.png'
                }, {
                    ImageUri: 'fourthImg.png'
                }],...]
            }
        },
        methods: {
            statusUpdate (status) {
                console.log(status)
            }
        }
    };
</script>`;

export default {
    name: 'BroadcastImg组件',
    desc: '<p>摇奖机结果图</p>',
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
                    ['imgs', 'N', '图片列表', 'Array<Array<Object>>', '-', {
                        type: 'pre',
                        contents: `[[{
        ImageUri: 'firstImg.png'
    }, {
        ImageUri: 'secImg.png'
    }, {
        ImageUri: 'thirdImg.png'
    }, {
        ImageUri: 'fourthImg.png'
}],...]`
                    }],
                    ['resultImg', 'N', '背景图片', 'String', '-', '-'],
                    ['status', 'N', '状态：0为未开始，1为开始，2为隐藏还未显示反面图，3为显示反面图结束', 'Number', '0|1|2|3', '0']
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
                        'update:status',
                        '更新status',
                        '更新的值'
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
                contents: 'yuzhaoman'
            }]
        }
    ]
};
