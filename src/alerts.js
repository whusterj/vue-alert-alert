const Alert = {
  id: null,
  type: 'info',
  message: 'No message',
  timeout: null,
  create (opts = {}) {
    return {
      ...Alert,
      ...opts
    }
  },
}

export default Alert