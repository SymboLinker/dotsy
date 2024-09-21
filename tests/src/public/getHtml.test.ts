import { describe } from 'mocha';
import { expect } from 'chai';
import { Dot, getHtml, Settings } from '../../../src/x';

describe('Basic stuff', () => {
  it(`returns a div with class name "dotsy-rectangle"`, () => {
    // Arrange
    const settings = new Settings();
    // Act
    const result = getHtml(settings);
    // Assert
    expect(result.startsWith('<div class="dotsy-rectangle" style="position: relative;')).to.be.true;
  });
  it(`contains an absolute div (with class name "dotsy-dot") for each dot`, () => {
    // Arrange
    const settings = new Settings();
    settings.dots = [new Dot(), new Dot()];
    // Act
    const result = getHtml(settings);
    // Assert
    expect(result.startsWith('<div class="dotsy-rectangle" style="position: relative;')).to.be.true;
    expect(countOccurrences(result, '<div class="dotsy-dot" style="position: absolute;')).to.equal(2);
  });
});

function countOccurrences(x : string, substring : string) {
  return x.split(substring).length - 1;
}
