import Alert from './alerts'

const store = {
  alerts: [],
  nextAlertID: 0,
}

export default store

export function addAlert (opts = {}) {
  console.log('addAlert.store:', store)

  const newAlert = Alert.create(
    Object.assign({ id: store.nextAlertID }, opts)
  )
  store.alerts.unshift(newAlert)

  if (newAlert.timeout) {
    setTimeout(() => {
      removeAlert(newAlert)
    }, newAlert.timeout)
  }

  store.nextAlertID += 1
}

export function removeAlert (alert) {
  Vue.delete(store.alerts, store.alerts.indexOf(alert))
}

