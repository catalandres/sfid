"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const SalesforceId_1 = require("../src/SalesforceId");
describe('SalesforceID', () => {
    it('should not validate an empty string', () => {
        chai_1.expect(SalesforceId_1.SalesforceID.validate('')).to.equal(false);
    });
    it('should not validate an alphanumeric string of length 14 or less', () => {
        chai_1.expect(SalesforceId_1.SalesforceID.validate('01234567890')).to.equal(false);
    });
    it('should not validate a string of length 15 that contains symbols', () => {
        chai_1.expect(SalesforceId_1.SalesforceID.validate('ABCDE123456789!')).to.equal(false);
    });
    it('should validate any alphanumberic string of length 15', () => {
        chai_1.expect(SalesforceId_1.SalesforceID.validate('ABcde1234567890')).to.equal(true);
    });
    it('should calculate the 3 last characters in an ID18 based on the first 15', () => {
        chai_1.expect(SalesforceId_1.SalesforceID.suffixID18('00Of4000005hwBzEAI')).to.equal('EAI');
    });
    it('should accept as valid an empirically valid Salesforce ID', () => {
        chai_1.expect(SalesforceId_1.SalesforceID.validate('00Of4000005hwBzEAI')).to.equal(true);
    });
    it('should accept as valid an empirically invalid Salesforce ID', () => {
        chai_1.expect(SalesforceId_1.SalesforceID.validate('00Of4000005hwBzEAZ')).to.equal(false);
    });
    it('should throw an error if the ID fed to the constructor is not valid', () => {
        chai_1.expect(() => {
            const id = new SalesforceId_1.SalesforceID('');
        }).to.throw('Not a valid Salesforce ID.');
    });
});
//# sourceMappingURL=SalesforceId.js.map