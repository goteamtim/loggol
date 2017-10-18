var chai = require('chai'),
    mocha = require('mocha'),
    sinonChai = require('sinon-chai'),
    loggol = require('../loggol.js'),
    expect = chai.expect,
    sinon = require("sinon");
    chai.use(sinonChai);

describe('Loggol Tests',function(){
    it('Shouldnt expose show logging variable',function(){
        expect(loggol.showLogging).to.be.a('undefined');
    });
    it('Should log user input when set to on',function(){
        var spy = sinon.spy(console,'log');
        expect(loggol.log('testing123')).to.equal(spy.calledWith('LOGGOL>>> testing123'));
    });
});