import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

const tpls = `<${getAlias(1)}-pop-bottom
    :data="myPopData">
</${getAlias(1)}-pop-bottom>`;

export default {
    name: 'PopBottom组件',
    desc: '<p>主题弹窗按钮（大翻盘、摇奖机在用）。</p>',
    contents: [
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
                contents: `<script>
    import ${getAlias()}AeAnimation from 'popBottom/PopBottom';
    export default {
        data(){
            return {
                myPopData: {
                    shareBtnTxt: 'xxxx',
                    washBtnTxt: 'xxxxx'
                }
            };
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
                    ['data', 'Y', '弹窗数据', 'Object', '-', {
                        type: 'markdown',
                        contents: `\`\`\`
{
    shareBtnTxt: 'xxxx',
    washBtnTxt: 'xxxxx'
}
                        `
                    }]
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
                        'shareBtnClick',
                        '点击分享事件',
                        '-'
                    ],
                    [
                        'washBtnClick',
                        '点击用券事件',
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
