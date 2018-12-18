export * from '../common/constant';

/**
 * 项目别名
 */
export const ALIAS = 'Ac';

/**
 *
 * @param {null|'1'} flag 1为全小写，其它则使用原名
 */
export function getAlias(flag) {
    let res = ALIAS;
    switch (`${flag}`) {
        case '1':
            res = ALIAS.toLowerCase();
            break;

        default:
            break;
    }
    return res;
}
