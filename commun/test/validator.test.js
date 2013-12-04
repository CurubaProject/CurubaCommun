"use strict";

var Validators = require('../validator.js').Validator,
   should = require('should');

var validator = new Validators();

var a = { test : 1, test2 : 'testing\r<html>' };
var b = {
   validators : {
      test : {
         checking : function (param, value, that) {
            that.check(value, 'test1').len(3, 10);
            that.check(value, 'test1').notEmpty();
            that.check(value, 'test1').isAlphanumeric();
         }
      },
      test2 : {
         checking : function (param, value, that) {
            that.check(value, 'test2').len(3, 10);
            that.check(value, 'test2').notEmpty();
            that.check(value, 'test2').isAlphanumeric();
         }
      }
   }
};

describe('validator.test.js -', function () {

   // MUST BE FIRST TEST TO INITIALIZE _errors
   it('function checkParams', function (done) {
      console.time('check');
      validator.checkParams(a, b.validators);
      console.timeEnd('check');
      validator._errors.length.should.equal(3);
      validator.getErrors(0).should.equal('test1');
      done();
   });

   it('function checkParams params exit', function (done) {
      validator.checkParams(a, b.validators);

      a.test.should.equal('1');
      a.test2.should.equal('testing\r&amp;lt;html&amp;gt;');

      done();
   });

   it('function error', function (done) {
      validator._errors = [];
      validator.error('test');
      validator._errors.length.should.equal(1);
      done();
   });

   it('function getErrors', function (done) {
      validator._errors = [];
      validator.error('test');
      validator.getErrors()[0].should.equal('test');
      done();
   });

   it('function getErrors with params', function (done) {
      validator._errors = [];
      validator.error('test');
      validator.getErrors(0).should.equal('test');
      done();
   });

});
