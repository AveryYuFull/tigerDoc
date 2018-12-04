/**
 * 生成表格数据
 * @param {*} lists 列表数据
 * @param {*} dataMap 数据映射
 * @returns {Array} table结果数据
 */
export default function generateTableMap(lists, dataMap) {
    const res = [];
    (lists || []).forEach((list) => {
        if (list && list.length > 0) {
            let trItem;
            (list || []).forEach((item, index) => {
                if (dataMap && dataMap[index]) {
                    trItem = trItem || {};
                    trItem[dataMap[index]] = item;
                }
            });
            if (trItem) {
                res.push(trItem);
            }
        }
    });
    return res;
}
