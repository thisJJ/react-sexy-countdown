import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Countdown from '../lib'
import moment from 'moment'
storiesOf('Countdown', module)
  .add('Countdown', () => {
    return (
      <Countdown
        date={ moment.unix(1527114359).utc().add(7, 'hour').format() }
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
