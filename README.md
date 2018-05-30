# react-sexy-countdown

![GitHub package version](https://img.shields.io/github/package-json/v/thisjj/react-sexy-countdown.svg)
![Build](https://api.travis-ci.org/thisJJ/react-sexy-countdown.svg?branch=master "Build")
![Download](https://img.shields.io/npm/dt/react-sexy-countdown.svg "Download")


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
| lastTextTime | Object | {} | set text after number countdown example: { Day: 'D', Hours: 'H', Min: 'M', Sec: 'S' } |
| beforeTextTime | Object | {} | set text before number countdown example:  { Day: 'D', Hours: 'H', Min: 'M', Sec: 'S' } |
|isDayDoubleZero|Boolean| false| "0 : 0 : 0 : 0" if true "00 : 0 : 0 : 0" |
|isHoursDoubleZero|Boolean| false| "0 : 0 : 0 : 0" if true "0 : 00 : 0 : 0"|
|isMinDoubleZero|Boolean| false| "0 : 0 : 0 : 0" if true "0 : 0 : 00 : 0"|
|isSecDoubleZero|Boolean| false| "0 : 0 : 0 : 0" if true "0 : 0 : 0 : 00"|

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
  lastTextTime={{
    Day: 'D'
  }}
  isDayDoubleZero={ true }
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
        <div className="react-countdown-time">
          <span className="react-countdown-before-text-day">is</span>
            12 
          <span className="react-countdown-last-text-day">D</span>
        </div>
      </div>
    </div>

    <div className="react-countdown-box">
      <div className="react-countdown-element">
        <div className="react-countdown-time-text">Houts</div>
        <div className="react-countdown-time">
          <span className="react-countdown-before-text-hours">is</span>
            12 
          <span className="react-countdown-last-text-hours">H</span>
        </div>
      </div>
    </div>


    <div className="react-countdown-box">
      <div className="react-countdown-element">
        <div className="react-countdown-time-text">Min</div>
        <div className="react-countdown-time">
          <span className="react-countdown-before-text-min">is</span>
            12 
          <span className="react-countdown-last-text-min">M</span>
        </div>
      </div>
    </div>

    <div className="react-countdown-box">
      <div className="react-countdown-element">
        <div className="react-countdown-time-text">Sec</div>
        <div className="react-countdown-time">
          <span className="react-countdown-before-text-sec">is</span>
            12 
          <span className="react-countdown-last-text-sec">S</span>
        </div>
      </div>
    </div>
  </div>
```
