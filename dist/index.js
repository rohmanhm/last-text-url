"use strict";
function convert(url) {
    var splittedURL = url.split('/');
    return splittedURL[splittedURL.length - 1];
}
module.exports = convert;
