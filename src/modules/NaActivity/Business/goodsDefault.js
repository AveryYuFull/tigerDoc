import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';
import {
    MODULEDATA, ACTIVITYINFO, MODULEDATAPROP, ACTIVITYINFOPROP
} from './common/commonData';

const tpls = `<${getAlias(1)}-goods-default
    :moduleData="moduleData"
    :activityInfo="activityInfo"
    @click="click">
</${getAlias(1)}-goods-default>`;

const script = `<script>
    import ${getAlias()}GoodsDefault from 'goodsDefault/GoodsDefault';
    export default {
        components: {
            ${getAlias()}GoodsDefault
        },
        data() {
            return {
                ${MODULEDATA.GOODSDEFAULT},
                ${ACTIVITYINFO}
            }
        }
    };
</script>`;

export default {
    name: 'GoodsDefault组件',
    desc: '<p>普通商品模块</p>',
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
                    MODULEDATAPROP,
                    ACTIVITYINFOPROP
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
                contents: 'chengsiyu'
            }]
        }
    ]
};
