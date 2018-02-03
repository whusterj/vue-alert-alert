<template>
  <div class="aa-container">
    <transition-group name="fade" tag="div">
      <alert-alert-item
        v-for="alert in alerts"
        :alert="alert"
        :key="alert.id"
        @remove="handleRemove"
      >
      </alert-alert-item>
    </transition-group>    
  </div>
</template>

<script>
import store from './store'
import Alert from './alerts'
import AlertAlertItem from './AlertAlertItem'

export default {
  name: 'AlertAlert'
  data () {
    return {
      alert: Alert.create({
        type: 'info',
        message: 'test',
      }),
      alerts: store.alerts
    }
  },
  methods: {
    handleRemove (alert) {
      removeAlert(alert)
    }
  },
  components: {
    AlertAlertItem
  }
}
</script>

<style scoped>
/*
 * Fixed container for alerts
 */
.aa-container {
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 1001;
}

/*
 * Item transition animations
 */
.fade-move {
  transition: all 600ms ease-in-out 50ms;
}
.fade-enter-active {
  transition: all 300ms ease-out;
}

.fade-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

.fade-enter,
.fade-leave-to { opacity: 0; }
.fade-enter { transform: scale(0.9); }

</style>