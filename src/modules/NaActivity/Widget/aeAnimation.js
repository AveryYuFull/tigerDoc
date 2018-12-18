import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'AeAnimation组件',
    desc: '<p>ae动画</p>',
    contents: [
        {
            name: 'Dependencies',
            contents: [{
                type: 'url',
                link: 'https://github.com/airbnb/lottie-web',
                contents: 'lottie-web'
            }, {
                type: 'url',
                link: 'https://github.com/Stuk/jszip',
                contents: 'jszip'
            }, {
                type: 'url',
                link: 'https://github.com/Stuk/jszip-utils',
                contents: 'jszip-utils'
            }]
        },
        {
            name: 'Example',
            contents: [{
                type: 'desc',
                contents: 'template:'
            }, {
                type: 'pre',
                contents: `<template>
    <${getAlias(1)}-ae-animation
        :img-url="imgUrl">
    </${getAlias(1)}-ae-animation>
</template>`
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: `<script>
    import ${getAlias()}AeAnimation from 'aeAnimation/AeAnimation';
    export default {
        components: {
            ${getAlias()}AeAnimation
        },
        data(){
            return {
                imgUrl: 'ae.zip'
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
                    ['imgUrl', 'Y', '显示值', 'string', '', '']
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
                contents: 'yuzhaoman'
            }]
        }
    ]
};
