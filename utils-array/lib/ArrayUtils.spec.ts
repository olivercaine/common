import { expect } from 'chai';
import { arrayToNumberKeyMap, INumberKeyMap } from './ArrayUtils';

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

            const indexedArray: INumberKeyMap<IPerson> = arrayToNumberKeyMap<IPerson>(array);

            expect(indexedArray.get(1)!.name).to.equal('Joe');
            expect(indexedArray.get(3)!.name).to.equal('Sam');
            expect(indexedArray.get(4)!.name).to.equal('Matt');
        });
    });
});
