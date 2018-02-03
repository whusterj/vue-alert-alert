const Alert = {
  id: null,
  type: 'info',
  message: 'No message',
  timeout: null,
  create (opts = {}) {
    return Object.assign(
      Object.create(Alert),
      opts
    )
  }
}

export default Alert