import React, { Component } from 'react';
import { formatCurrency, getDonations, Donation, track } from './utils';

type State = {
  loading: boolean;
  donations: Donation[];
  totalAmount: number;
};

class Donations extends Component {
  state: State = {
    loading: true,
    donations: [],
    totalAmount: 0,
  };

  async componentDidMount() {
    const donations = this.state.donations;

    const result = await getDonations();

    for (var i = 0; i < result.length; i++) {
      donations.push(result[i]);
    }

    this.setState({
      donations: donations,
      loading: false,
      totalAmount: this.state.donations.reduce((p, c) => p + c.amount, 0),
    });
  }

  renderDonation(donation: Donation) {
    return (
      <div>
        <b style={{ textDecoration: 'underline' }}>
          Donation amount:{' '}
          {formatCurrency(donation.amount, donation.currencyCode)}
        </b>
        <span onClick={() => this.goToUrl(donation)}>Receipt</span>
      </div>
    );
  }

  goToUrl(donation: Donation) {
    window.location.href = donation.receiptUrl;
    track('receipt-click');
  }

  trackabout(e: any) {
    e.preventDefault();
    return track('about');
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <div>
        <div className="header">
          <img src="/logo.png" />
          <div className="nav">
            <a href="/">
              <img src="img/homeicon.svg" />
            </a>
            <a href="/" onClick={this.trackabout}>
              <img src="img/aboutIcon.svg" />
            </a>
          </div>
        </div>
        <ul>{this.state.donations.map(this.renderDonation)}</ul>
        <b>Total amount: </b>{' '}
        {formatCurrency(
          this.state.totalAmount,
          this.state.donations[0].currencyCode,
        )}
      </div>
    );
  }
}

export default Donations;
