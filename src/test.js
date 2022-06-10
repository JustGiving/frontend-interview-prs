const { shallow, mount } = require('enzyme');
const Donations = require('./Donations');
const { getDonations } = require('./utils');

describe('Donations', () => {
  test('renders correctly', () => {
    mount(<Donations />);
  });

  test('renders header', () => {
    const wrapper = shallow(<Donations />);
    expect(wrapper.find('header')).to.have.lengthOf(1);
  });
});

describe('utils', () => {
  describe('getDonations', () => {
    test.only('fetches donations', () => {
      const donations = getDonations().then(() => {
        expect(donations).not.toBe(null);
      });
    });
  });
});
