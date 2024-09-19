import { describe } from 'mocha';
import { expect } from 'chai';
import { getHtml, Settings } from '../../src/x';

describe('Basic stuff', () => {
  it(`returns a div with class name "dots"`, () => {
    // Arrange
    let settings = new Settings();
    // Act
    let result = getHtml(settings);
    // Assert
    expect(result.startsWith('<div class="dots">')).to.be.true;
  });
});
