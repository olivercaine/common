import { expect } from 'chai';
import { preventDefaultWrap } from '.';

describe('Prevent default wrap', () => {
    it('Should return type function', () => {
        // tslint:disable-next-line
        expect(typeof preventDefaultWrap(() => console.log)).to.equal('function')
    });
});
