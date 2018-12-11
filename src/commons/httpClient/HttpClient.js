import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators'; // 'rxjs/add/operator/publishReplay';

import { HttpClientCore } from './HttpClient.core';

export class HttpClient extends HttpClientCore {
    /* eslint-disable no-useless-constructor */
    constructor(option, $env, $storage) {
        super(option, $env, $storage);
        this.option = option;
    }

    /**
   * 发送请求
   * @param {*} url api url
   * @param {*} option 选项
   * @returns {Observable<object>}
   */
    getData(url, option) {
        let _that = this;

        let isErrorData = false;
        if (option && typeof option.isErrorData !== 'undefined') {
            isErrorData = option.isErrorData;
        } else if (this.option && typeof this.option.isErrorData !== 'undefined') {
            isErrorData = this.option.isErrorData;
        }
        return Observable.create((observer) => {
            _that.send(url, option).subscribe(back => {
                let data = back.data;
                let isError = false;
                if (isErrorData && data && this.config && (this.config.onServiceError instanceof Function)) {
                    let _data = this.config.onServiceError(data);
                    if (typeof data !== 'undefined' && typeof _data === 'undefined') {
                        isError = true;
                    }
                }
                if (!isError || !isErrorData) {
                    observer.next(data);
                }
            }, err => {
                if (isErrorData && _that.config && (_that.config.onHttpError instanceof Function)) {
                    _that.config.onHttpError(err, url);
                } else {
                    observer.error(err);
                }
            }, () => {
                observer.complete();
            });
        }).pipe(publishReplay(), refCount());
    }
    /**
   * get请求
   * @param {*} url api url
   * @param {*} option 选项
   * @returns {Observable<object>}
   */
    get(url, option) {
        return this.getData(url, Object.assign({}, option, {
            method: 'get'
        }));
    }

    /**
   * post请求
   * @param {*} url api url
   * @param {*} option 选项
   * @returns {Observable<object>}
   */
    post(url, option) {
        return this.getData(url, Object.assign({}, option, {
            method: 'post'
        }));
    }
}

/**
 * 实例化HttpClient
 *
 * @export
 * @param {*} args 参数
 * @returns {HttpClient}
 */
export function httpFactory (...args) {
    return new HttpClient(...args);
}
