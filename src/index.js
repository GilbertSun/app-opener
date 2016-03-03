require('./index.less')

const DEFAULT_SETTING = {
    FALLBACK: 'http://cv.qiaobutang.com/help/getApp'
};

let isWechat = /MicroMessenger/.test(window.navigator.userAgent);
let isAndroid = /Android/.test(window.navigator.userAgent);
let isIOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent);
let setting = Object.assign({}, DEFAULT_SETTING);

/**
 * convert normal path to intent path
 * @param path {String} `qiaobutangapp://career/${uid}`
 * @param fallback {String} fallback url when app isn't installed
 */
let intentConvert = (path, fallback) => {
    let tmp = path.split('://');
    let intentPath = tmp[1];
    let syntax = {
        scheme: tmp[0],
        package: 'com.qiaobutang',
        'S.browser_fallback_url': fallback ? encodeURIComponent(setting.FALLBACK) : null
    };

    let intentParam = Object.keys(syntax).filter((key) => {
        return syntax[key] !== null;
    }).map((key) => {
        return `${key}=${syntax[key]}`
    }).join(';');
    return `intent://${intentPath}/#Intent;${intentParam};end`
}

let showOpenBrowserTip = (platform) => {
    let className = 'open-browser_' + platform;
    let tip = document.createElement('div');
    tip.className = `open-browser ${className}`;
    document.body.appendChild(tip);
    tip.addEventListener('click', () => {
        tip.parentNode.removeChild(tip);
    })
}
let config = (option) => {
    setting = Object.assign({}, setting, option);
}
let openApp = (path, fallback) => {
    let intent = intentConvert(path, fallback);
    //if (isWechat) {
        if (isAndroid) {
            showOpenBrowserTip('android');
        } else if (isIOS) {
            showOpenBrowserTip('ios');
        }
    /*} else if (isAndroid) {
        location.href = intent;
    } else if (isIOS) {
        location.href = path;
    }*/
}

export {
    openApp,
    config
};
