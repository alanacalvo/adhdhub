import './WeekView.scss';

function WeekView({ sessions }) {
  if (sessions.length === 0) {
    return <h1>no sessions</h1>
  }
  console.log(sessions)
  return (
    <>
      <div class="graph">
        <ul class="months">
        <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        {/* <ul class="days">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul> */}
        <ul className='squares'>
          {sessions ? sessions.map((session, i) => {
            return (
              <li key={i}>
                {/* <SessionBox session={session} /> */}
                {session.colorRating}
              </li>
            )
          })
            : <h2>searching for sessions</h2>
          }
        </ul>
      </div>
    </>
  )
}

export default WeekView