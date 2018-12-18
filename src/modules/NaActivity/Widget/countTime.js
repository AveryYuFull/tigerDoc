import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

const tpls = `<${getAlias(1)}-count-time
    :currentTime="'2018-12-06'"
    :endTime="'2018-12-07'">
</${getAlias(1)}-count-time>`;

export default {
    name: 'CountTime组件',
    desc: '<p>倒计时组件。</p>',
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
                    ['currentTime', 'Y', '当前时间', 'String', '-', '-'],
                    ['endTime', 'Y', '结束时间', 'String', '-', '-'],
                    ['styleType', 'N', '样式类型(0为浅色，1为深色)', 'Number', '-', '0']
                ],
                TABLE_CONTENT_ATTR_MAP.PROPS,
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
