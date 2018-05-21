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

##Support this date&time format only
```
2018-05-29T07:00:00+07:00
```
### Can use moment-timezone for convert format
```
const dateFormat = moment.tz(1527552000000, 'Asia/Bangkok').format() 
console.log(dateFormat); //2018-05-29T07:00:00+07:00
```

## using
```javascript
<Countdown
  date="2018-05-29T07:00:00+07:00"
  onEndCountdown={ (count) => console.log(count) }
/>
```

![view](https://thisjj.github.io/react-sexy-countdown/static/1.png "View 1")

![view](https://thisjj.github.io/react-sexy-countdown/static/2.png "View 2")

![view](https://thisjj.github.io/react-sexy-countdown/static/3.png "View 3")

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