import generateRender from './generateRender';

/**
 * 生成组件
 * @param {*} components 组件列表
 * @param {*} Theme 主题模版
 * @returns {Array} 返回组件方法
 */
export function generateComponentMap(components, Theme) {
    const componentMap = {};
    Object.keys(Object.assign({}, components)).forEach((key) => {
        componentMap[key] = generateRender(components[key], Theme);
    });
    return componentMap;
}
