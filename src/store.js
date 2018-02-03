import Alert from './alerts'

const store = {
  alerts: [],
  nextAlertID: 0,
}

export default store

export function addAlert (opts = {}) {
  const newAlert = Alert.create({
    id: store.nextAlertID,
    ...opts
  })
  store.alerts.unshift(newAlert)

  if (newAlert.timeout) {
    setTimeout(() => {
      removeAlert(newAlert)
    }, newAlert.timeout)
  }

  store.nextAlertID += 1
}

export function removeAlert (alert) {
  const index = store.alerts.indexOf(alert)
  store.alerts.splice(index, 1)
}

