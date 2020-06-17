import { expect } from 'chai';
import { urlToRedirectTo } from './Redirect';

describe('Given a non-local URL', () => {
  it('Then it should redirect if need be', () => {
    // No redirect for localhost
    expect(urlToRedirectTo('olivercaine.co', 'http://localhost:3000/')).to.equal(undefined);

    // No redirect for perfect URL
    expect(urlToRedirectTo('olivercaine.co', 'https://olivercaine.co')).to.equal(undefined);

    // Redirect http to https
    expect(urlToRedirectTo('olivercaine.co', 'http://olivercaine.co')).to.equal('https://olivercaine.co');
    expect(urlToRedirectTo('olivercaine.co', 'http://www.olivercaine.co')).to.equal('https://olivercaine.co');
    expect(urlToRedirectTo('olivercaine.co', 'http://branch.olivercaine.co')).to.equal('https://branch.olivercaine.co');

    // Redirect to apex
    expect(urlToRedirectTo('olivercaine.co', 'http://www.olivercaine.co')).to.equal('https://olivercaine.co');
    expect(urlToRedirectTo('olivercaine.co', 'https://www.olivercaine.co')).to.equal('https://olivercaine.co');
  });
});
