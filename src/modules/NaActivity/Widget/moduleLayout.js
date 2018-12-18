import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

const tpls = `<${getAlias(1)}-module-col1>
    <li class="${getAlias(1)}_module-item"></li>
</${getAlias(1)}-module-col1>
<${getAlias(1)}-module-col2>
    <li class="${getAlias(1)}_module-item"></li>
    <li class="${getAlias(1)}_module-item"></li>
</${getAlias(1)}-module-col2>`;

export default {
    name: 'ModuleLayout组件',
    desc: '<p>商品模块布局。</p>',
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
