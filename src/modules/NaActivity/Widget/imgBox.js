import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

const tpls = `<${getAlias(1)}-img-box
    :imgUrl="'img.png'">
</${getAlias(1)}-img-box>`;

export default {
    name: 'ImgBox组件',
    desc: '<p>高宽不限比例的图片组件</p>',
    contents: [
        {
            name: 'Example',
            contents: [{
                type: 'desc',
                contents: 'template:'
            }, {
                type: 'pre',
                contents: tpls
            }]
        },
        {
            type: 'table',
            name: 'Props',
            titles: TABLE_TITLES.PROPS,
            contents: generateTableMap(
                [
                    ['imgUrl', 'Y', '图片地址', 'String', '-', '-'],
                    ['loadingSrc', 'N', '加载时显示的图片地址', 'String', '-', '-'],
                    ['isLazy', 'N', '是否需要lazy', 'Boolean', '-', 'true'],
                    ['isSetStyle', 'N', 'lazy是否需要设置图片的style', 'Boolean', '-', 'false'],
                    ['width', 'N', 'lazy图片宽度', 'Number|String', '-', '-'],
                    ['height', 'N', 'lazy图片高度', 'Number|String', '-', '-'],
                    ['cutter', 'N', 'lazy裁剪模式', 'Number|String', '-', '-']
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
