import {expect} from 'chai';
import {SFID} from '../src/SFID';

describe('SalesforceID', () => {
  it('should not validate an empty string', () => {
    expect(SFID.validate('')).to.equal(false);
  });

  it('should not validate an alphanumeric string of length 14 or less', () => {
    expect(SFID.validate('01234567890')).to.equal(false);
  });

  it('should not validate a string of length 15 that contains symbols', () => {
    expect(SFID.validate('ABCDE123456789!')).to.equal(false);
  });

  it('should validate any alphanumberic string of length 15', () => {
    expect(SFID.validate('ABcde1234567890')).to.equal(true);
  });

  it('should calculate the suffix for an ID15', () => {
    expect(SFID.suffix('00Of4000005hwBz')).to.equal('EAI');
  });

  it('should calculate the 3 last characters in an ID18 based on the first 15',
     () => {
       expect(SFID.suffix('00Of4000005hwBzEAI')).to.equal('EAI');
     });

  it('should accept an empirically valid Salesforce ID', () => {
    expect(SFID.validate('00Of4000005hwBzEAI')).to.equal(true);
  });

  it('should reject an empirically invalid Salesforce ID', () => {
    expect(SFID.validate('00Of4000005hwBzEAZ')).to.equal(false);
  });

  it('should throw an error if the ID fed to the constructor is not valid',
     () => {
       expect(() => {
         const id = new SFID('');
       }).to.throw('Not a valid Salesforce ID.');
     });

  it('should complete the suffix if the constructor is fed an ID15', () => {
    const id = new SFID('00Of4000005hwBz');
    expect(id.id).to.equal('00Of4000005hwBzEAI');
  });

  it('should return the prefix of the identificator', () => {
    const id = new SFID('00Of4000005hwBz');
    expect(id.prefix).to.equal('00O');
  });

  it('should return the suffix of the identificator', () => {
    const id = new SFID('00Of4000005hwBz');
    expect(id.suffix).to.equal('EAI');
  });
});