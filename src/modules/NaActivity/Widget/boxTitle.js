import { TABLE_TITLES } from '../constant';
// import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP } from '../constant';
// import generateTableMap from '../../common/helpers/generateTableMap';

export default {
    name: 'BoxTitle组件',
    desc: '<p>公共标题（如：商品标题）</p>',
    contents: [
        {
            name: 'Dependencies',
            contents: []
        },
        {
            name: 'Example',
            contents: []
        },
        {
            type: 'table',
            name: 'Props',
            titles: TABLE_TITLES.PROPS,
            contents: []
        },
        {
            type: 'table',
            name: 'Events',
            titles: TABLE_TITLES.EVENTS,
            contents: []
        },
        {
            type: 'table',
            name: 'Methods',
            titles: TABLE_TITLES.METHOD,
            contents: []
        },
        {
            type: 'table',
            name: 'Projects',
            titles: TABLE_TITLES.PROJECTS,
            contents: []
        },
        {
            name: 'Backers',
            contents: []
        }
    ]
};
