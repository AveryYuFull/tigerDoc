import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';
import { MODULEDATA, MODULEDATAPROP } from './common/commonData';

const picData = `picData = {
                    Copywriting: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
                    Image: "https://img1.tuhu.org//d3/4a6c/223c72183f313550a14397e30f_w1080_h400.png"
                    Title: "测试测试"
                }`;

const tpls = `<${getAlias(1)}-general-page
    :moduleData="moduleData"
    :picData="picData"
    v-if="picData"
    @click="click($event, picData)">
</${getAlias(1)}-general-page>`;

const script = `<script>
    import ${getAlias()}GeneralPage from 'generalPage/GeneralPage';
    export default {
        components: {
            ${getAlias()}GeneralPage
        },
        data() {
            return {
                ${MODULEDATA.GENERAL},
                ${picData}
            }
        }
    };
</script>`;

export default {
    name: 'GeneralPage组件',
    desc: '<p>通用头图模块</p>',
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
                    ['picData', 'Y', '头图数据', 'Object', '-', '-']
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
                        '$event, picData'
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
                contents: ''
            }]
        }
    ]
};
