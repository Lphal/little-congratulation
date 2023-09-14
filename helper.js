/**
 * 生成祝福语参数
 * @param {string[]} textList
 * @returns {string} 参数字符串
 */
function makeCongParam(textList) {
    return utf8_to_b64(JSON.stringify(textList))
}

function getCongList(param) {
    try {
        const data = b64_to_utf8(param)
        return JSON.parse(data)
    } catch (error) {
        console.error(error)
    }
}

function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)))
}

function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)))
}

function copyTextToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}