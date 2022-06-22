import errors from './cif-error.json'
import locks from './cif-lock.json'
import moment from 'moment'

export const goofyFun = () => {
  let hits = []

  for (let lock of locks) {
    let errorHits = errors.filter(err => {
      if (err.cif === lock.cif) {
        const errorTime = moment(err.timestamp, 'DD/MM/YYYY hh:mm:ss')
        const lockTime = moment(lock.timestamp, 'YYYY-MM-DD hh:mm:ss')

        const diff = Math.abs(lockTime.diff(errorTime, 'hours'))

        return diff <= 24
      }
      return false
    })

    if (errorHits.length > 0) {
      let hit = {
        cif: lock.cif,
        lockTime: lock.timestamp,
        errorTimes: errorHits.map(e => e.timestamp)
      }

      hits.push(hit)
    }
  }

  console.log(hits)

  console.log(hits.length)

  return hits
}