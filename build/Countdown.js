'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const langFormat = {
  en: {
    Days: 'Days',
    Day: 'Day',
    Hours: 'Hours',
    Min: 'Min',
    Sec: 'Sec'
  },
  th: {
    Days: 'วัน',
    Day: 'วัน',
    Hours: 'ชั่วโมง',
    Min: 'นาที',
    Sec: 'วินาที'
  }
};

class Countdown extends _react.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = () => {
      // update every second
      this.interval = setInterval(() => {
        const date = this.calculateCountdown(this.props.date);
        date ? this.setState(date) : this.stop();
      }, 1000);
    };

    this.componentWillUnmount = () => {
      this.stop();
    };

    this.calculateCountdown = endDate => {
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
      if (diff >= 365.25 * 86400) {
        // 365.25 * 24 * 60 * 60
        timeLeft.years = Math.floor(diff / (365.25 * 86400));
        diff -= timeLeft.years * 365.25 * 86400;
      }
      if (diff >= 86400) {
        // 24 * 60 * 60
        timeLeft.days = Math.floor(diff / 86400);
        diff -= timeLeft.days * 86400;
      }
      if (diff >= 3600) {
        // 60 * 60
        timeLeft.hours = Math.floor(diff / 3600);
        diff -= timeLeft.hours * 3600;
      }
      if (diff >= 60) {
        timeLeft.min = Math.floor(diff / 60);
        diff -= timeLeft.min * 60;
      }
      timeLeft.sec = diff;

      return timeLeft;
    };

    this.stop = () => {
      clearInterval(this.interval);
      const {
        onEndCountdown
      } = this.props;
      onEndCountdown(0);
    };

    this.addLeadingZeros = value => {
      value = String(value);
      while (value.length < 2) {
        value = '0' + value;
      }
      return value;
    };

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
  }

  render() {
    const countDown = this.state;
    const {
      lang,
      displayText
    } = this.props;

    const getLangFormat = (0, _lodash.isEmpty)(displayText) ? langFormat[lang] : displayText;

    return _react2.default.createElement(
      'div',
      { className: 'react-countdown-container' },
      _react2.default.createElement(
        'div',
        { className: 'react-countdown-box' },
        _react2.default.createElement(
          'div',
          { className: 'react-countdown-element' },
          _react2.default.createElement(
            'div',
            { className: 'react-countdown-time-text' },
            countDown.days === 1 ? getLangFormat.Day : getLangFormat.Days
          ),
          _react2.default.createElement(
            'div',
            { className: 'react-countdown-time' },
            this.addLeadingZeros(countDown.days)
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'react-countdown-box' },
        _react2.default.createElement(
          'div',
          { className: 'react-countdown-element' },
          _react2.default.createElement(
            'div',
            { className: 'react-countdown-time-text' },
            getLangFormat.Hours
          ),
          _react2.default.createElement(
            'div',
            { className: 'react-countdown-time' },
            this.addLeadingZeros(countDown.hours)
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'react-countdown-box' },
        _react2.default.createElement(
          'div',
          { className: 'react-countdown-element' },
          _react2.default.createElement(
            'div',
            { className: 'react-countdown-time-text' },
            getLangFormat.Min
          ),
          _react2.default.createElement(
            'div',
            { className: 'react-countdown-time' },
            this.addLeadingZeros(countDown.min)
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'react-countdown-box' },
        _react2.default.createElement(
          'div',
          { className: 'react-countdown-element' },
          _react2.default.createElement(
            'div',
            { className: 'react-countdown-time-text' },
            getLangFormat.Sec
          ),
          _react2.default.createElement(
            'div',
            { className: 'react-countdown-time' },
            this.addLeadingZeros(countDown.sec)
          )
        )
      )
    );
  }
}

Countdown.propTypes = {
  date: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onEndCountdown: _propTypes2.default.func,
  lang: _propTypes2.default.string,
  displayText: _propTypes2.default.object
};

Countdown.defaultProps = {
  date: new Date(),
  onEndCountdown: () => null,
  lang: "en"
};

exports.default = Countdown;