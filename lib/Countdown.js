import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone'


class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount = () => {
    // update every second
    const dateFormat = moment.tz(this.props.date,this.props.timeZone)
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(dateFormat);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount = () => {
    this.stop();
  }

  calculateCountdown = (endDate) => {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop = () => {
    clearInterval(this.interval);
    const {
      onEndCountdown
    } = this.props
    onEndCountdown(0)
  }

  addLeadingZeros = (value) => {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className="react-countdown-container">
        <span className="react-countdown-box">
          <span className="react-countdown-element">
              <span className="react-countdown-time">{this.addLeadingZeros(countDown.days)}</span>
              <span className="react-countdown-time-text">{countDown.days === 1 ? 'Day' : 'Days'}</span>
          </span>
        </span>

        <span className="react-countdown-box">
          <span className="react-countdown-element">
            <span className="react-countdown-time">{this.addLeadingZeros(countDown.hours)}</span>
            <span className="react-countdown-time-text">Hours</span>
          </span>
        </span>


        <span className="react-countdown-box">
          <span className="react-countdown-element">
            <span className="react-countdown-time">{this.addLeadingZeros(countDown.min)}</span>
            <span className="react-countdown-time-text">Min</span>
          </span>
        </span>

        <span className="react-countdown-box">
          <span className="react-countdown-element">
            <span className="react-countdown-time">{this.addLeadingZeros(countDown.sec)}</span>
            <span className="react-countdown-time-text">Sec</span>
          </span>
        </span>
      </div>
    );
  }
}

Countdown.propTypes = {
  timeZone: PropTypes.string,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onEndCountdown: PropTypes.func,
};

Countdown.defaultProps = {
  timeZone: 'Asia/Bangkok',
  date: new Date(),
  onEndCountdown: () => null
};

export default Countdown;