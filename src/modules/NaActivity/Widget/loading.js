import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

const tpls = `<${getAlias(1)}-loading
    :isLoading="true"
    :noActivity="false"
    :loadingImg="'loadingImg.png'"
    :errImg="'errImg.png'"
    :endImg="'endImg.png'">
</${getAlias(1)}-loading>`;

export default {
    name: 'Loading组件',
    desc: '<p>进入页面的loading组件</p>',
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
                    ['loadingImg', 'Y', '加载中使用的图片', 'String', '-', '-'],
                    ['errImg', 'Y', '加载出错使用的图片', 'String', '-', '-'],
                    ['endImg', 'Y', '加载结束使用的图片', 'String', '-', '-'],
                    ['isLoading', 'N', '是否在加载中', 'Boolean', '-', 'true'],
                    ['noActivity', 'N', '是否加载出错', 'Boolean', '-', 'false']
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
                        '-'
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
