import hljs from 'highlight.js';
// import 'highlight.js/styles/xt256.css';
// import 'highlight.js/styles/atelier-estuary-light.css';
// import 'highlight.js/styles/ir-black.css';
import 'highlight.js/styles/atelier-dune-light.css';

hljs.initHighlightingOnLoad();
hljs.configure({
    tabReplace: ' ' // 4 spaces
});

/**
 * 包裹code代码
 * @param {*} str 字符串值
 * @returns {String} 包裹好的数据
 */
export default function preFilter(str) {
    return `<pre><code>${hljs.highlight('html', str).value}</code></pre>`;
}
