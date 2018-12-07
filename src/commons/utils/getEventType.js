/**
 * 获取事件类型
 * @param {String} type 事件类型
 * @returns {Object} 返回事件类型集合
 * @exports
 */
export default function getEventType (type) {
    let _res = null;
    if ('ontouchstart' in window || type === 'touchstart') {
        _res.isTouchable = true;
        _res = {
            isTouchable: true,
            EVENT_START: 'touchstart',
            EVENT_MOVE: 'touchmove',
            EVENT_END: 'touchend'
        };
    } else {
        _res = {
            isTouchable: false,
            EVENT_START: 'mousedown',
            EVENT_MOVE: 'mousemove',
            EVENT_END: 'mouseup'
        };
    }
    return _res;
}
