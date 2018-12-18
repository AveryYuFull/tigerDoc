import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'SusTip组件',
    desc: '<p>图片提示消息弹窗组件。</p>',
    contents: [
        {
            name: 'Dependencies',
            contents: [{
                type: 'router',
                link: `${getAlias()}-PopupBox`,
                contents: `${getAlias()}PopupBox`
            }, {
                type: 'router',
                link: `${getAlias()}-ImgBox`,
                contents: `${getAlias()}ImgBox`
            }]
        },
        {
            name: 'Example',
            contents: [
                //                 {
                //                 type: 'desc',
                //                 contents: 'template:'
                //             }, {
                //                 type: 'pre',
                //                 contents: `<${getAlias(1)}-tag-list
                //     :tags="tags"
                //     :tagFilter="tagFilter">
                // </${getAlias(1)}-tag-list>`
                //             },
                {
                    type: 'desc',
                    contents: 'script:'
                }, {
                    type: 'pre',
                    contents: `<script>
    import ${getAlias()}SusTip from 'susTip/SusTip';
    export default {
        methods: {
            handleClick() {
                this.$$Popup.open(AcSusTip, {
                    props: {
                        title: '标题',
                        des: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
                    },
                    wrapCla: 'acs_popup-box-wrap',
                    alignCla: 'centerMiddle',
                    transitionCls: 't_scale',
                    isClickBgClose: true
                });
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
                    ['title', 'N', '提示弹框标题', 'String', '', '\' \''],
                    ['imgUrl', 'N', '提示弹框图片', 'String', '', '\' \''],
                    ['des', 'N', '提示弹框描述', 'String', '', '\' \'']
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
