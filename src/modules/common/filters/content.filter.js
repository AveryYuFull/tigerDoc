/**
 * 内容过滤
 * @param {*} item 数据
 * @returns {Object} 过滤后的item数据
 */
export default function contentFilter(item) {
    let res = item;
    if (!(item instanceof Object)) {
        res = {
            contents: item
        };
    }
    if (res instanceof Object && res.constructor === Object && !res.contents) {
        res.contents = '';
    }
    return res;
}
