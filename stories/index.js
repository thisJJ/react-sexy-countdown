import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Countdown from '../lib'
storiesOf('Countdown', module)
  .add('Countdown', () => {
    return (
      <Countdown
        date="2018-05-29T07:00:00+07:00"
        onEndCountdown={ (count) => console.log(count) }
        lang="th"
        displayText={{
          Days: 'DAYS',
          Day: 'วัน',
          Hours: 'ชั่วโมง',
          Min: 'นาที',
          Sec: 'วินาที',
        }}
      />
    )
  })
