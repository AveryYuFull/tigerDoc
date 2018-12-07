/**
 * 初始化事件
 * @param {HTMLElement} el dom元素
 * @param {Array|String} types 事件类型
 * @param {Function} fn 回调方法
 * @param {Boolean} flag add／remove事件监听器
 * @param {Boolean|Object} capture 可选参数
 */
export default function initEventListener (el, types, fn, flag, capture = true) {
    if (!el || !types || !fn) {
        return;
    }

    flag = (flag && 'add') || 'remove';
    if (typeof capture !== 'object') {
        capture = {
            passive: true,
            capture: capture
        };
    }
    if (!Array.isArray(types)) {
        types = [types];
    }
    types.forEach(type => {
        _initEvent(type);
    });

    /**
     * 初始化事件
     * @param {String} type 事件类型
     * @private
     */
    function _initEvent (type) {
        if (type && el) {
            el[flag + 'EventListener'](type, fn, capture);
        }
    }
}
