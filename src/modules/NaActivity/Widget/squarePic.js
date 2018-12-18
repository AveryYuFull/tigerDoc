import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'SquarePic组件',
    desc: '<p>方形图片组件（等比缩放的图片使用）。</p>',
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
                contents: `<${getAlias(1)}-square-pic
    :imgUrl="imgUrl"
    :width="imgWidth">
</${getAlias(1)}-square-pic>`
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: `<script>
    import ${getAlias()}SquarePic from 'squarePic/SquarePic';
    export default {
        components: {
            ${getAlias()}SquarePic
        },
        data() {
            return {
                imgUrl: 'https://img1.tuhu.org/Images/Products/FsjIcgQ4-OVKHq26p0AgOxisVf9__w800_h800.jpeg@380h_99q.webp',
                imgWidth: '50%'
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
                    ['imgUrl', 'Y', '图片链接', 'String', '', ''],
                    ['isLazy', 'N', '是否需要lazy加载', 'Boolean', 'true|false', 'true'],
                    ['loadingSrc', 'N', '加载时显示的图片地址', 'String', '', ''],
                    ['isWrap', 'N', 'lazy加载时是否加包裹元素', 'Boolean', 'true|false', 'false'],
                    ['isSetStyle', 'N', '是否需要设置图片的style', 'Boolean', 'true|false', 'false'],
                    ['width', 'N', '图片宽度', '[Number|String]', '', ''],
                    ['height', 'N', '图片高度', '[Number|String]', '', ''],
                    ['cutter', 'N', '裁剪模式', 'String', 'contain|cover|auto', '']
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
                contents: ''
            }]
        }
    ]
};
