"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SFID {
    get prefix() {
        return this.id.substr(0, 3);
    }
    get suffix() {
        return this.id.substr(15, 3);
    }
    constructor(id) {
        if (SFID.validate(id)) {
            this.id = id;
        }
        else {
            throw new Error('Not a valid Salesforce ID.');
        }
        if (id.length === 15) {
            this.id = this.id + SFID.suffix(this.id);
        }
    }
    static validate(id) {
        if (!(new RegExp('[a-zA-Z0-9]{18}|[a-zA-Z0-9]{15}')).test(id)) {
            return false;
        }
        if (id.length === 15) {
            return true;
        }
        else {
            return id.substr(15, 3) === SFID.suffix(id);
        }
    }
    static suffix(id) {
        const encode = (chunk) => {
            const translationMap = new Map([
                ['00000', 'A'], ['00001', 'B'], ['00010', 'C'], ['00011', 'D'],
                ['00100', 'E'], ['00101', 'F'], ['00110', 'G'], ['00111', 'H'],
                ['01000', 'I'], ['01001', 'J'], ['01010', 'K'], ['01011', 'L'],
                ['01100', 'M'], ['01101', 'N'], ['01110', 'O'], ['01111', 'P'],
                ['10000', 'Q'], ['10001', 'R'], ['10010', 'S'], ['10011', 'T'],
                ['10100', 'U'], ['10101', 'V'], ['10110', 'W'], ['10111', 'X'],
                ['11000', 'Y'], ['11001', 'Z'], ['11010', '0'], ['11011', '1'],
                ['11100', '2'], ['11101', '3'], ['11110', '4'], ['11111', '5']
            ]);
            return translationMap.get(chunk.split('')
                .reverse()
                .map((char) => {
                return ((new RegExp('[A-Z]{1}')).test(char)) ? '1' : '0';
            })
                .join(''));
        };
        if ((new RegExp('[a-zA-Z0-9]{18}|[a-zA-Z0-9]{15}')).test(id)) {
            return encode(id.substr(0, 5)) + encode(id.substr(5, 5)) +
                encode(id.substr(10, 5));
        }
        else {
            return '';
        }
    }
}
exports.SFID = SFID;
//# sourceMappingURL=SFID.js.map