/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var version = require('../src/index.js');

describe('blear.utils.version', function () {
    it('.gt', function () {
        expect(version.gt('1.2.33', '1.2.31')).toEqual(true);
        expect(version.gt('1.2.31.2', '1.2.31')).toEqual(true);
        expect(version.gt('1.2.31', '1.2')).toEqual(true);
        expect(version.gt('1.2.31', '1.2.33')).toEqual(false);
        expect(version.gt('1.2.31', '1.2.31')).toEqual(false);
    });

    it('.lt', function () {
        expect(version.lt('1.2.33', '1.2.31')).toEqual(false);
        expect(version.lt('1.2.31.2', '1.2.31')).toEqual(false);
        expect(version.lt('1.2.31', '1.2')).toEqual(false);
        expect(version.lt('1.2.31', '1.2.33')).toEqual(true);
        expect(version.lt('1.2.31', '1.2.31')).toEqual(false);
    });

    it('.gte', function () {
        expect(version.gte('1.2.33', '1.2.31')).toEqual(true);
        expect(version.gte('1.2.31.2', '1.2.31')).toEqual(true);
        expect(version.gte('1.2.31', '1.2')).toEqual(true);
        expect(version.gte('1.2.31', '1.2.33')).toEqual(false);
        expect(version.gte('1.2.31', '1.2.31')).toEqual(true);
    });

    it('.lte', function () {
        expect(version.lte('1.2.33', '1.2.31')).toEqual(false);
        expect(version.lte('1.2.31.2', '1.2.31')).toEqual(false);
        expect(version.lte('1.2.31', '1.2')).toEqual(false);
        expect(version.lte('1.2.31', '1.2.33')).toEqual(true);
        expect(version.lte('1.2.31', '1.2.31')).toEqual(true);
    });
});

