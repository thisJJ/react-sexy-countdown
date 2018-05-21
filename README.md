# react-sexy-countdown

![build](https://api.travis-ci.org/thisJJ/react-sexy-countdown.svg?branch=master "Build")

## Install
```
npm i --save react-sexy-countdown

```


## Import
```javascript
import Countdown from 'react-sexy-countdown'

```

## using
```javascript
<Countdown
  date={ 1212133333 }
  onEndCountdown={ (count) => console.log(count) }
/>
```

## Style (with className for you custom style)
```html
  <div className="react-countdown-container">
    <span className="react-countdown-box">
      <span className="react-countdown-element">
          <span className="react-countdown-time">12</span>
          <span className="react-countdown-time-text">Days</span>
      </span>
    </span>

    <span className="react-countdown-box">
      <span className="react-countdown-element">
        <span className="react-countdown-time">4</span>
        <span className="react-countdown-time-text">Hours</span>
      </span>
    </span>


    <span className="react-countdown-box">
      <span className="react-countdown-element">
        <span className="react-countdown-time">12</span>
        <span className="react-countdown-time-text">Min</span>
      </span>
    </span>

    <span className="react-countdown-box">
      <span className="react-countdown-element">
        <span className="react-countdown-time">45</span>
        <span className="react-countdown-time-text">Sec</span>
      </span>
    </span>
  </div>
```