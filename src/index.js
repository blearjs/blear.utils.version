/**
 * blear.utils.version
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 */


'use strict';

var number = require('blear.utils.number');

var parseInt = number.parseInt;


exports.gt = function (v1, v2) {
    return compare(v1, v2, '>');
};

exports.gte = function (v1, v2) {
    return compare(v1, v2, '>=');
};

exports.lt = function (v1, v2) {
    return compare(v1, v2, '<');
};

exports.lte = function (v1, v2) {
    return compare(v1, v2, '<=');
};

// ====================================
function normalize(v) {
    return v.split(/\./);
}

function compare(v1, v2, symbol) {
    var nv1 = normalize(v1);
    var nv2 = normalize(v2);
    var times = Math.max(nv1.length, nv2.length);
    var start = 0;
    var otherwise;

    for (; start < times; start++) {
        var n1 = parseInt(nv1[start], 0);
        var n2 = parseInt(nv2[start], 0);

        switch (symbol) {
            case '>':
                otherwise = false;
                if (n1 > n2) {
                    return true;
                }
                break;

            case '<':
                otherwise = false;
                if (n1 < n2) {
                    return true;
                }
                break;

            case '>=':
                otherwise = true;
                if (n1 < n2) {
                    return false;
                }
                break;

            case '<=':
                otherwise = true;
                if (n1 > n2) {
                    return false;
                }
                break;
        }
    }

    return otherwise;
}
