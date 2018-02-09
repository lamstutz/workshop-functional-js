var expect = require('chai').expect;

var transformCheckpoint = require('../src/program').transformCheckpoint;


describe('Function transformCheckpoint', function () {

  it('Function transformCheckpoint without parameter should return false', function () {
    expect(transformCheckpoint()).to.be.false;
  });

  it('Function transformCheckpoint withparameter should return object and dont mute param', function () {
    var testValue = {
      id: 'whataw0nd3rful1d',
      uuid: 'whataw0nd3rful1d',
      address: 'unknown',
      addressType: 'unknown',
      connectable: true,
      advertisement: {
        localName: undefined,
        txPowerLevel: undefined,
        manufacturerData: undefined,
        serviceData: [],
        serviceUuids: ['abcd']
      },
      rssi: -66,
      services: null,
      state: 'outofcontrol'
    };
    var testValueCopy = Object.assign({}, testValue);

    transformCheckpoint(testValue);

    expect(testValue).to.eql(testValueCopy);
  });

});