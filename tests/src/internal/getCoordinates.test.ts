import { describe } from 'mocha';
import { expect } from 'chai';
import { getCoordinates as getCoordinates } from '../../../src/internal/getCoordinates';
import { Settings } from '../../../src/x';
import { Coordinate } from '../../../src/internal/Coordinate';

describe(getCoordinates.name, () => {
  it(`5 times 5`, () => {
    // Arrange
    let settings = new Settings();
    settings.width = 5;
    settings.height = 5;
    // Act
    let result = getCoordinates(settings);
    // Assert
    for (let i = 0; i < 25; i++) {
        
    }
    expect(result).to.eql([
        /*
            The initial 'distances' are:
            1 1 1 1 1
            1 2 2 2 1
            1 2 3 2 1
            1 2 2 2 1
            1 1 1 1 1
        */
        new Coordinate(0, 0, 1), new Coordinate(0, 1, 1), new Coordinate(0, 2, 1), new Coordinate(0, 3, 1), new Coordinate(0, 4, 1), 
        new Coordinate(1, 0, 1), new Coordinate(1, 1, 2), new Coordinate(1, 2, 2), new Coordinate(1, 3, 2), new Coordinate(1, 4, 1), 
        new Coordinate(2, 0, 1), new Coordinate(2, 1, 2), new Coordinate(2, 2, 3), new Coordinate(2, 3, 2), new Coordinate(2, 4, 1), 
        new Coordinate(3, 0, 1), new Coordinate(3, 1, 2), new Coordinate(3, 2, 2), new Coordinate(3, 3, 2), new Coordinate(3, 4, 1), 
        new Coordinate(4, 0, 1), new Coordinate(4, 1, 1), new Coordinate(4, 2, 1), new Coordinate(4, 3, 1), new Coordinate(4, 4, 1),
    ]);
  });

  it(`4 times 4`, () => {
    // Arrange
    let settings = new Settings();
    settings.width = 4;
    settings.height = 4;
    // Act
    let result = getCoordinates(settings);
    // Assert
    for (let i = 0; i < 16; i++) {
        
    }
    expect(result).to.eql([
        /*
            The initial 'distances' are:
            1 1 1 1
            1 2 2 1
            1 2 2 1
            1 1 1 1
        */
        new Coordinate(0, 0, 1), new Coordinate(0, 1, 1), new Coordinate(0, 2, 1), new Coordinate(0, 3, 1), 
        new Coordinate(1, 0, 1), new Coordinate(1, 1, 2), new Coordinate(1, 2, 2), new Coordinate(1, 3, 1), 
        new Coordinate(2, 0, 1), new Coordinate(2, 1, 2), new Coordinate(2, 2, 2), new Coordinate(2, 3, 1),
        new Coordinate(3, 0, 1), new Coordinate(3, 1, 1), new Coordinate(3, 2, 1), new Coordinate(3, 3, 1),
    ]);
  });
});