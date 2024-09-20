import { describe } from 'mocha';
import { expect } from 'chai';

import * as dotsy from '../../src/x';

describe('flat', () => {
  it('allows importing all from the same root namespace', () => {
    expect(dotsy.Settings).is.not.null;
    expect(dotsy.getHtml).is.not.null;
    expect(dotsy.Dot).is.not.null;
  });
});
