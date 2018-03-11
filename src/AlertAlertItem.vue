<template>
  <div
    class="aa-notification"
    :class="alert.type"
    @click="$emit('remove', alert)"
    v-html="alert.message"
  ></div>
</template>

<script>
export default {
  name: 'AlertAlertItem',
  props: ['alert'],
}
</script>

<style scoped>
.aa-notification {
  width: 300px;
  min-height: 40px;
  padding: 12px;
  margin-bottom: 12px;
  background-color: white;
  border-left: 4px solid rgb(100, 100, 100);
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);

  transition: all 200ms ease-in-out;
}

.aa-notification:hover {
  transform: scale(1.06);
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);
}

.aa-notification.info {
  border-left-color: rgb(100, 100, 200);
}

.aa-notification.success {
  border-left-color: rgb(100, 180, 100);
}

.aa-notification.warning {
  border-left-color: rgb(230, 215, 100);
}

.aa-notification.error {
  border-left-color: rgb(230, 100, 100);
}
</style>