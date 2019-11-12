
function setCookie(key, value, options) {
    options = options || {};
    var path = options.path ? ";path=" + options.path : "";
    var exp = "";
    if (options.expires) {
        var d = new Date();
        d.setDate(d.getDate() + options.expires)
        exp = ";expires = " + d;
    }
    document.cookie = `${key}=${value}${exp}${path}`
}

function removeCookie(key, options) {
    options = options || {};
    options.expires = -1;
    setCookie(key, null, options);
}
function getCookie(key) {
    var cookie = document.cookie;
    var arr = cookie.split("; ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].split("=")[0] == key) {
            return (arr[i].split("=")[1])
        }
    }
    return "";
}