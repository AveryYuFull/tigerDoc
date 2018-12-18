import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'TVideo组件',
    desc: '<p>视频播放组件。</p>',
    contents: [
        {
            name: 'Dependencies',
            contents: [{
                type: 'router',
                link: `${getAlias()}-SquarePic`,
                contents: `${getAlias()}SquarePic`
            }, {
                type: 'router',
                link: `${getAlias()}-PlayBtn`,
                contents: `${getAlias()}PlayBtn`
            }]
        },
        {
            name: 'Example',
            contents: [{
                type: 'desc',
                contents: 'template:'
            }, {
                type: 'pre',
                contents: `<t-video
    img-url="https://img1.tuhu.org//44/bfe2/85b690c3b63f149599bda08277_w1920_h1080.jpg"
    video-url="https://img1.tuhu.org/videos/ProductVideo/a04c/0461/738d960a7c6ad0ea2e913581_720.mp4"
    :scrollTop="0"
    :opts="videoOpts"
    @click="click">
</t-video>`
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: `<script>
    import tVideo from 'tVideo/components/Video';
    export default {
        components: {
            tVideo
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
                    ['imgUrl', 'Y', '未播放时的图片地址', 'String', '', ''],
                    ['videoUrl', 'Y', '视频地Y址', 'String', '', ''],
                    ['scrollTop', 'Y', '距顶部的高度', 'Number', '', ''],
                    ['opts', 'Y', '视频的可选配置参数', 'Object', '', ''],
                    ['playFunc', 'N', '视频播放的回调方法', 'Function', '', ''],
                    ['pauseFunc', 'N', '视频暂停的回调方法', 'Function', '', '']
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
