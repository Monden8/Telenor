const { checkFormFields } = require('../../src/services/loginfields_checker');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

describe('login with username, password', () => {
  it('all fields are empty', () =>
    checkFormFields('', '')
      .should.be.rejectedWith('All fields are required.'));

  it('empty username', () =>
    checkFormFields('', 'asd')
      .should.be.rejectedWith('All fields are required.'));

  it('empty password', () =>
    checkFormFields('asd', '', '')
      .should.be.rejectedWith('All fields are required.'));

  it('undefined username', () =>
    checkFormFields(undefined, 'ads')
      .should.be.rejectedWith('All fields are required.'));

  it('undefined password', () =>
    checkFormFields('asd', undefined)
      .should.be.rejectedWith('All fields are required.'));

  it('all fields are correct', () =>
    checkFormFields('asd', 'asd')
      .should.become(undefined));
});
