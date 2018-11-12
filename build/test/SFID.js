"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const SFID_1 = require("../src/SFID");
describe('SalesforceID', () => {
    it('should not validate an empty string', () => {
        chai_1.expect(SFID_1.SFID.validate('')).to.equal(false);
    });
    it('should not validate an alphanumeric string of length 14 or less', () => {
        chai_1.expect(SFID_1.SFID.validate('01234567890')).to.equal(false);
    });
    it('should not validate a string of length 15 that contains symbols', () => {
        chai_1.expect(SFID_1.SFID.validate('ABCDE123456789!')).to.equal(false);
    });
    it('should validate any alphanumberic string of length 15', () => {
        chai_1.expect(SFID_1.SFID.validate('ABcde1234567890')).to.equal(true);
    });
    it('should calculate the suffix for an ID15', () => {
        chai_1.expect(SFID_1.SFID.suffix('00Of4000005hwBz')).to.equal('EAI');
    });
    it('should calculate the 3 last characters in an ID18 based on the first 15', () => {
        chai_1.expect(SFID_1.SFID.suffix('00Of4000005hwBzEAI')).to.equal('EAI');
    });
    it('should accept an empirically valid Salesforce ID', () => {
        chai_1.expect(SFID_1.SFID.validate('00Of4000005hwBzEAI')).to.equal(true);
    });
    it('should reject an empirically invalid Salesforce ID', () => {
        chai_1.expect(SFID_1.SFID.validate('00Of4000005hwBzEAZ')).to.equal(false);
    });
    it('should throw an error if the ID fed to the constructor is not valid', () => {
        chai_1.expect(() => {
            const id = new SFID_1.SFID('');
        }).to.throw('Not a valid Salesforce ID.');
    });
    it('should complete the suffix if the constructor is fed an ID15', () => {
        const id = new SFID_1.SFID('00Of4000005hwBz');
        chai_1.expect(id.id).to.equal('00Of4000005hwBzEAI');
    });
    it('should return the prefix of the identificator', () => {
        const id = new SFID_1.SFID('00Of4000005hwBz');
        chai_1.expect(id.prefix).to.equal('00O');
    });
    it('should return the suffix of the identificator', () => {
        const id = new SFID_1.SFID('00Of4000005hwBz');
        chai_1.expect(id.suffix).to.equal('EAI');
    });
});
//# sourceMappingURL=SFID.js.map