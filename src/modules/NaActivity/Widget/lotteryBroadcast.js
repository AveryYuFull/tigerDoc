import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

const tpls = `<${getAlias(1)}-lottery-broadcast
    :item-data="itemData"
    :img-urls="imgUrls">
</${getAlias(1)}-lottery-broadcast>`;

export default {
    name: 'LotteryBroadcast组件',
    desc: '<p>中奖播报组件（大翻盘在用）</p>',
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
            }]
        },
        {
            type: 'table',
            name: 'Props',
            titles: TABLE_TITLES.PROPS,
            contents: generateTableMap(
                [
                    ['itemData', 'Y', '需要轮播的数据列表', 'Array<String>', '-', '-'],
                    ['imgUrls', 'N', '轮播的盒子图片列表', 'Array<String>', '-', '-']
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
                contents: 'yuzhaoman'
            }]
        }
    ]
};
