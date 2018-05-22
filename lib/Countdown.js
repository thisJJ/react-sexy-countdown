import React, { Component } from 'react';
import PropTypes from 'prop-types';

const langFormat = {
  en: {
    Days: 'Days',
    Day: 'Day',
    Hours: 'Hours',
    Min: 'Min',
    Sec: 'Sec',
  },
  th: {
    Days: 'วัน',
    Day: 'วัน',
    Hours: 'ชั่วโมง',
    Min: 'นาที',
    Sec: 'วินาที',
  },
}

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
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
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
    const {
      lang,
      displayText,
    } = this.props

    const getLangFormat = displayText !== {} ? displayText : langFormat[lang]

    return (
      <div className="react-countdown-container">
        <div className="react-countdown-box">
          <div className="react-countdown-element">
            <div className="react-countdown-time-text">{countDown.days === 1 ? getLangFormat.Day : getLangFormat.Days }</div>
            <div className="react-countdown-time">{this.addLeadingZeros(countDown.days)}</div>
          </div>
        </div>

        <div className="react-countdown-box">
          <div className="react-countdown-element">
            <div className="react-countdown-time">{this.addLeadingZeros(countDown.hours)}</div>
            <div className="react-countdown-time-text">{ getLangFormat.Hours }</div>
          </div>
        </div>


        <div className="react-countdown-box">
          <div className="react-countdown-element">
            <div className="react-countdown-time">{this.addLeadingZeros(countDown.min)}</div>
            <div className="react-countdown-time-text">{ getLangFormat.Min }</div>
          </div>
        </div>

        <div className="react-countdown-box">
          <div className="react-countdown-element">
            <div className="react-countdown-time">{this.addLeadingZeros(countDown.sec)}</div>
            <div className="react-countdown-time-text">{ getLangFormat.Sec }</div>
          </div>
        </div>
      </div>
    );
  }
}

Countdown.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onEndCountdown: PropTypes.func,
  lang: PropTypes.string,
  displayText: PropTypes.object,
};

Countdown.defaultProps = {
  date: new Date(),
  onEndCountdown: () => null,
  lang: "en",
  displayText: {}
};

export default Countdown;