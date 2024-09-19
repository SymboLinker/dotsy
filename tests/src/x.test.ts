import { describe } from 'mocha';
import { expect } from 'chai';

import * as dots from '../../src/x';

describe('flat', () => {
  it('allows importing all from the same root namespace', () => {
    expect(dots.Settings).is.not.null;
    expect(dots.getHtml).is.not.null;
    expect(dots.Dot).is.not.null;
  });
});
