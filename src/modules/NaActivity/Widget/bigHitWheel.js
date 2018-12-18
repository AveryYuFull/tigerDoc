import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

const tpls = `<${getAlias(1)}-big-hit-wheel
    :status.sync="myStatus"
    :dataFilter="dataFilter"
    :list="list"
    :promptImg="promptImg"
    @click="getclick">
</${getAlias(1)}-big-hit-wheel>`;

const script = `<script>
    import ${getAlias()}BigHitWheel from 'bigHitWheel/BigHitWheel';
    export default {
        components: {
            ${getAlias()}BigHitWheel
        },
        data(){
            return {
                list: [{
                    hide: false,
                    bImgUrl: 'bgImg.png',
                    imgUrl: 'img.png'
                },...],
                promptImg: 'promptImg.png',
                status: 0 // 0为未开始，1为开始，1.5为隐藏还未显示反面图，2为显示反面图， 3结束
            };
        },
        methods: {
            dataFilter(item) {
                return item;
            }
        }
    };
</script>`;

export default {
    name: 'BigHitWheel组件',
    desc: '<p>大翻盘的轮</p>',
    contents: [
        {
            name: 'Dependencies',
            contents: [{
                type: 'router',
                link: `${getAlias()}-SquarePic`,
                contents: `${getAlias()}SquarePic`
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
                    ['list', 'Y', '图片列表', 'Array<Object|String>', '-', '-'],
                    ['promptImg', 'Y', '中奖结果图', 'String', '-', '-'],
                    ['status', 'N', '当前状态：0为未开始，1为开始，1.5为隐藏还未显示反面图，2为显示反面图， 3结束', 'Number', '0|1|1.5|2|3', '0']
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
                    ['dataFilter', '每项数据过滤', `item: {
                        hide: false,
                        bImgUrl: 'bgImg.png',
                        imgUrl: 'img.png'
                    }`]
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
                        `{
                            type: 'wheelItem',
                            Event: $event,
                            itemData: item
                        }`
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
