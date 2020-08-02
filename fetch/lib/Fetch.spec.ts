import { expect } from 'chai';

describe('Given two headers', () => {
    describe('When merging them together', () => {
        it('Should become one object', () => {
            // Arrange
            const headers = { Authorization: 'Basic 1234' }
            const additionalHeaders = { 'Content-Type': 'application/json' }

            // Act
            const merged = { ...headers, ...additionalHeaders };

            // Assert
            expect(JSON.stringify(merged)).to.equal(JSON.stringify({ 'Authorization': 'Basic 1234', 'Content-Type': 'application/json' }));
        });
    });
});
