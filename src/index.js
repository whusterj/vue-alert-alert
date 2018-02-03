import store, { addAlert, removeAlert } from './store'
import Alert from './alerts'
import AlertAlert from './AlertAlert.vue'

const Plugin = {
  install (Vue, options) {
    Vue.prototype.$Alert = {
      alert: addAlert,
      remove: removeAlert,
      alerts: store.alerts,
      nextAlertID: store.nextAlertID
    }
    Vue.component(AlertAlert.name, AlertAlert)
  }
}

export default Plugin
