import { expect } from 'chai';
import { containsLowercase, containsNumber, containsSpecialCharacter, containsUppercase } from '.';

describe('Given a string', () => {
    it('When checking if it contains uppercase', () => {
        // tslint:disable-next-line
        expect(containsUppercase(null)).to.equal(false);
        expect(containsUppercase(undefined)).to.equal(false);
        expect(containsUppercase('stRing')).to.equal(true);
        expect(containsUppercase('StRing')).to.equal(true);
        expect(containsUppercase('string')).to.equal(false);
    });

        it('When checking if it contains lowercase', () => {
        // tslint:disable-next-line
        expect(containsLowercase(null)).to.equal(false);
        expect(containsLowercase(undefined)).to.equal(false);
        expect(containsLowercase('STRING')).to.equal(false);
        expect(containsLowercase('STRiNG')).to.equal(true);
        expect(containsLowercase('sTRING')).to.equal(true);
    });

    it('When checking if it contains a number', () => {
        // tslint:disable-next-line
        expect(containsNumber(null)).to.equal(false);
        expect(containsNumber(undefined)).to.equal(false);
        expect(containsNumber('stRing')).to.equal(false);
        expect(containsNumber('StRing')).to.equal(false);
        expect(containsNumber('str1ng')).to.equal(true);
    });

    it('When checking if it contains special character', () => {
        // tslint:disable-next-line
        expect(containsSpecialCharacter(null)).to.equal(false);
        expect(containsSpecialCharacter(undefined)).to.equal(false);
        expect(containsSpecialCharacter('string')).to.equal(false);
        expect(containsSpecialCharacter('str*ing')).to.equal(true);
        expect(containsSpecialCharacter('str!ng')).to.equal(true);
    });
});