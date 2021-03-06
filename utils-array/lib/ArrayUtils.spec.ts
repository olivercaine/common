import { expect } from 'chai';
import { findById, IDictionary, indexArray } from './ArrayUtils';

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

describe('When searching for an entity by id', () => {
    it('Then the correct entity is returned', () => {
        const needle = {
            id: 123,
            name: 'ollie',
        };
        const haystack = [
            {
                id: 41,
                name: 'john',
            },
            needle, {
                id: 16,
                name: 'sam',
            },
        ];

        const result = findById(haystack, needle.id);

        expect(result).to.equal(needle);
    });
});

describe('Given I have an indexed object', () => {
    it('Then I should be able to get an entity by id', () => {
        // Arrange
        interface IPerson {
            id: string;
            name: string;
        }
        const dictionary: IDictionary<IPerson> = {
            1: {
                id: '1',
                name: 'Joe',
            },
            2: {
                id: '2',
                name: 'Sam',
            },
            3: {
                id: '3',
                name: 'Matt',
            },
        };

        // Act
        const needle = findById(dictionary as any[], '2');

        // Assert
        expect(needle.name).to.equal('Sam');
    });
});
