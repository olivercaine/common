import { expect } from 'chai';
import { IDictionary, indexArray } from './ArrayUtils';

describe('Given I have an array of objects with an id', () => {
    describe('When creating an index', () => {
        it('Then the objects should be retrievable by id', () => {
            interface IPerson {
                id: number;
                name: string;
            }
            const array: IPerson[] = [
                {
                    id: 1,
                    name: 'Joe',
                },
                {
                    id: 3,
                    name: 'Sam',
                },
                {
                    id: 4,
                    name: 'Matt',
                },
            ];

            const indexedArray: IDictionary<IPerson> = indexArray(array);

            expect(indexedArray[1].name).to.equal('Joe');
            expect(indexedArray[3].name).to.equal('Sam');
            expect(indexedArray[4].name).to.equal('Matt');
        });
    });
});
