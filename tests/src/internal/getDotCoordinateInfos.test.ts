import { describe } from 'mocha';
import { expect } from 'chai';
import { getCoordinates as getCoordinates } from '../../../src/internal/getCoordinates';
import { Settings } from '../../../src/x';
import { Coordinate } from '../../../src/internal/Coordinate';
import { getDotCoordinateInfos } from '../../../src/internal/getDotCoordinateInfos';
import { Dot } from '../../../src/settings/Dot';
import { DotCoordinateInfo } from '../../../src/internal/DotCoordinateInfo';

describe(getDotCoordinateInfos.name, () => {
  it(`mid 5 times 5`, () => {
    // Arrange
    let midCoordinate = new Coordinate(2, 2, 3);
    let initialCoordinates = [
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
        new Coordinate(2, 0, 1), new Coordinate(2, 1, 2), midCoordinate, new Coordinate(2, 3, 2), new Coordinate(2, 4, 1), 
        new Coordinate(3, 0, 1), new Coordinate(3, 1, 2), new Coordinate(3, 2, 2), new Coordinate(3, 3, 2), new Coordinate(3, 4, 1), 
        new Coordinate(4, 0, 1), new Coordinate(4, 1, 1), new Coordinate(4, 2, 1), new Coordinate(4, 3, 1), new Coordinate(4, 4, 1),
    ];
    let dot = new Dot();
    dot.radius = 2;

    // Act
    let result = getDotCoordinateInfos([dot], initialCoordinates);
    // Assert
    let expected = new DotCoordinateInfo(dot, midCoordinate);

    expect(result).to.eql([expected]);
  });

  it(`9 out of 5 times 5`, () => {
    for (let i = 0; i < 10; i++) {
        // Arrange
        let initialCoordinates = [
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
        ];
        let dot = new Dot();
        dot.radius = 1;

        // Act
        let infos = getDotCoordinateInfos([dot], initialCoordinates);
        // Assert
        expect(infos.some(info => info.coordinate.x >= 1 && info.coordinate.x <= 3
                                && info.coordinate.y >= 1 && info.coordinate.y <= 3
        )).to.be.true;
    }
  });
});