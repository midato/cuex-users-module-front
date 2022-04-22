import { CustomProvider, DatePicker } from 'rsuite'
import esES from 'rsuite/locales/es_ES';
import "rsuite/dist/rsuite.min.css"
// import * as dateFns from 'date-fns'


const CalendarSingle = () => {
  const format = 'dd-MM-yyyy HH:mm:ss'

  const styles = {
    padding: 20,
    textAlign: "center"
  }

  const handleSelectedDate = (value) => {
    console.log(value)
  }

  // const combine = reduceCombine(true, 7, true, true)
  // console.log(combine)

  return (
    <div style={styles}>
      <h3>Seleccionar Fecha</h3>
      <CustomProvider locale={esES}>
        <DatePicker
          showWeekNumbers
          format={`${format}`}
          style={{ width: 260 }}
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
          onChange={handleSelectedDate}
        />
      </CustomProvider>

    </div>
  )
}

export default CalendarSingle
