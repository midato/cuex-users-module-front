import { CustomProvider, DateRangePicker } from 'rsuite'
import esES from 'rsuite/locales/es_ES'

import "rsuite/dist/rsuite.min.css"
// import * as dateFns from 'date-fns'

const {
  allowedMaxDays,
  allowedDays,
  allowedRange,
  beforeToday,
  afterToday,
  combine
} = DateRangePicker

/*const Label = props => {
  return <label style={{ display: 'block', marginTop: 10 }} {...props} />
}*/

/*const reduceCombine = (allowedMaxDays = true, howManuAllowedMaxDays = 7, afterDay = false, beforeDay = false) => {
  console.log(allowedMaxDays)
  console.log(howManuAllowedMaxDays)
  console.log(afterDay)
  console.log(beforeDay)
  return (
    `combine(
      ${allowedMaxDays ? 'allowedMaxDays(' + howManuAllowedMaxDays + '),' : ''}
      ${afterDay ? 'afterDay(),' : ''}
    )`
  )
}*/

const CalendarRange = () => {
  const styles = {
    padding: 20,
    textAlign: "center"
  }

  // const combine = reduceCombine(true, 7, true, true)
  // console.log(combine)

  const handleSelectedDates = (values) => {
    console.log(values)
    const beginDate = values[0]
    const endDate = values[1]
    console.log(beginDate)
    console.log(endDate)
  }

  return (
    <div style={styles}>
      <h3>Seleccionar Rango de Fechas</h3>
      <CustomProvider locale={esES}>
        <DateRangePicker
          disabledDate={combine(allowedMaxDays(7), beforeToday())}
          /*locale={{
            sunday: 'Do',
            monday: 'Lu',
            tuesday: 'Ma',
            wednesday: 'Mi',
            thursday: 'Ju',
            friday: 'Vi',
            saturday: 'Sa',
            ok: 'OK',
            // today: 'Hoy',
            // yesterday: 'Ayer',
            // last7Days: 'Los últimos 7 días',
            hours: 'Horas',
            minutes: 'Minutos',
            seconds: 'Segundos'
          }}
          ranges={[
            {
              label: 'Ayer',
              value: [dateFns.addDays(new Date(), -1), dateFns.addDays(new Date(), -1)]
            },
            {
              label: 'Hoy',
              value: [new Date(), new Date()]
            },
            {
              label: 'Mañana',
              value: [dateFns.addDays(new Date(), 1), dateFns.addDays(new Date(), 1)]
            },
            {
              label: 'Últimos 7 días',
              value: [dateFns.subDays(new Date(), 6), new Date()]
            }
          ]}*/
          onChange={handleSelectedDates}
        />
      </CustomProvider>
    </div>
  )
}

export default CalendarRange
