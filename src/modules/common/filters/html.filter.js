import preFilter from './pre.filter';
import contentFilter from './content.filter';

/**
 * html 过滤
 * @param {*} item item数据
 * @returns {*} 过滤后的数据
 */
export default function htmlFilter(item) {
    let data = contentFilter(item);
    if (data instanceof Object) {
        const cont = data.contents || '';
        switch ((data.type || '').toLowerCase()) {
            case 'pre':
                data = preFilter(cont);
                break;
            case 'desc':
                data = `<div class="dc_desc">${cont}</div>`;
                break;
            default:
                data = data.contents || '—';
                break;
        }
    }
    return data;
}
