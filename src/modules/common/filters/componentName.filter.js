/**
 * 组件名称过滤
 * @param {Object} item 对象
 * @returns {String} 返回组件key
 */
export default function componentNameFilter(item) {
    let res = '';
    const data = item || {};
    switch (data.type) {
        case 'table':
            res = 'd-table';
            break;
        case 'markdown':
            res = 'd-markdown';
            break;
        case 'url':
            res = 'd-url';
            break;
        case 'img':
            res = 'd-img';
            break;
        default:
            break;
    }
    return res;
}
