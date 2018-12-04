/**
 * 生成组件
 * @param {*} data 数据
 * @param {*} Theme 组件模版
 * @returns {Object} 返回组件
 */
export default function generateRender(data, Theme) {
    return {
        render: h => h(Theme, {
            props: {
                data
            }
        })
    };
}
