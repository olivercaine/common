import { expect } from 'chai';
import { urlToRedirectTo } from './Redirect';

describe('Given a non-local URL', () => {
  it('Then it should redirect if need be', () => {
    expect(urlToRedirectTo('olivercaine.co', 'http://www.olivercaine.co')).to.equal('https://olivercaine.co');
    expect(urlToRedirectTo('olivercaine.co', 'http://olivercaine.co')).to.equal('https://olivercaine.co');
    expect(urlToRedirectTo('olivercaine.co', 'http://branch.olivercaine.co')).to.equal('https://branch.olivercaine.co');
    expect(urlToRedirectTo('olivercaine.co', 'http://localhost:3000/')).to.equal(undefined);
  });
});
