const assert = require('chai').assert;
const breedDetailsFromFile = require('../timer2');

describe('#timer2', () => {

  it('provides, via callback, beep when b is pressed', (done) => {
    breedDetailsFromFile('Saphire', (desc) => {
      assert.equal(undefined, desc);
      done(); 
    });      
  });

});