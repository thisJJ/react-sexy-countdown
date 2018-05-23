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

## Config props
| Props        | Type         | Default  | Format Example |
| ------------- |:-------------:| --------------------:| -----------------:|
| date      | String | Date.now() | 2018-05-29T07:00:00+07:00 |
| onEndCountdown | Func | null | (count) => console.log(count) |
| lang | String | en | "th" or "en" |
| displayText | Object | {} | { Days: 'Days', Day: 'Day', Hours: 'Hours', Min: 'Min', Sec: 'Sec' } |


## using
```javascript
<Countdown
  date="2018-05-29T07:00:00+07:00"
  onEndCountdown={ (count) => console.log(count) }
  lang="th"
  displayText={{
    Days: 'วัน',
    Day: 'วัน',
    Hours: 'ชั่วโมง',
    Min: 'นาที',
    Sec: 'วินาที',
  }}
/>
```

![view](https://thisjj.github.io/react-sexy-countdown/static/1.png "View 1")

![view](https://thisjj.github.io/react-sexy-countdown/static/2.png "View 2")

![view](https://thisjj.github.io/react-sexy-countdown/static/3.png "View 3")

## Style (with className for you custom style)
```html
  <div className="react-countdown-container">
    <div className="react-countdown-box">
      <div className="react-countdown-element">
        <div className="react-countdown-time-text">Day</div>
        <div className="react-countdown-time">12</div>
      </div>
    </div>

    <div className="react-countdown-box">
      <div className="react-countdown-element">
        <div className="react-countdown-time">Houts</div>
        <div className="react-countdown-time-text">12</div>
      </div>
    </div>


    <div className="react-countdown-box">
      <div className="react-countdown-element">
        <div className="react-countdown-time">Min</div>
        <div className="react-countdown-time-text">12</div>
      </div>
    </div>

    <div className="react-countdown-box">
      <div className="react-countdown-element">
        <div className="react-countdown-time">Sec</div>
        <div className="react-countdown-time-text">12</div>
      </div>
    </div>
  </div>
```