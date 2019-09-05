const { lengthChecker } = require('../src/services/length_checker-service');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

describe('register with username, password, email', () => {
  it('all fields are empty', () =>
    lengthChecker('', '', '')
      .should.be.rejectedWith('Please fill in all fields!'));

  it('empty username and password', () =>
    lengthChecker('', '', 'asd')
      .should.be.rejectedWith('Please fill in all fields!'));

  it('email is not given', () =>
    lengthChecker('asd', 'asd', '')
      .should.be.rejectedWith('Please fill in all fields!'));

  it('empty password', () =>
    lengthChecker('asd', '', 'asd')
      .should.be.rejectedWith('Please fill in all fields!'));

  it('all fields are correct', () =>
    lengthChecker('asd', 'asd', 'asd')
      .should.become(undefined));
});
