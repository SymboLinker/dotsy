import { describe } from 'mocha';
import { expect } from 'chai';
import { Dot, getHtml, Settings } from '../../../src/x';

describe('Basic stuff', () => {
  it(`returns a div with class name "dotsy"`, () => {
    // Arrange
    const settings = new Settings();
    // Act
    const result = getHtml(settings);
    // Assert
    expect(result.startsWith('<div class="dotsy" style="position: relative;')).to.be.true;
  });
  it(`contains a relative div for each dot`, () => {
    // Arrange
    const settings = new Settings();
    settings.dots = [new Dot(), new Dot()];
    // Act
    const result = getHtml(settings);
    // Assert
    expect(result.startsWith('<div class="dotsy" style="position: relative;')).to.be.true;
    expect(countOccurrences(result, '<div style="position: absolute;')).to.equal(2);
  });
});

function countOccurrences(x : string, substring : string) {
  return x.split(substring).length - 1;
}
