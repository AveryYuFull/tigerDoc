import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'PopTop组件',
    desc: '<p>浮窗的标题（抽奖的标题，是一张图片）</p>',
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
                contents: `<${getAlias(1)}-pop-top
    :data="myPopData">
</${getAlias(1)}-pop-top>`
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: `<script>
    import ${getAlias()}PopTop from 'popTop/PopTop';
    export default {
        components: {
            ${getAlias()}PopTop
        },
        data() {
            return {
                data: {
                    popHeaderTheme: 'https://img1.tuhu.org/Upload/chengsiyu/31e1/773e/3885f7b268f52c658dc49774_w360_h272.png',
                    description: '恭喜你！抽到了实物测试奖励1',
                    subDescription: '确认一下收货地址吧'
                }
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
                    ['data', 'Y', '弹框头部数据（可以只传图片地址，或者一个包含图片地址和描述文字的对象{popHeaderTheme, description, subDescription}）', 'Object|String', '', '']
                ],
                TABLE_CONTENT_ATTR_MAP.PROPS,
            )
        },
        // {
        //     type: 'table',
        //     name: 'Events',
        //     titles: TABLE_TITLES.EVENTS,
        //     contents: []
        // },
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
