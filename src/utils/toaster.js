import { toast } from 'react-toastify'

class Toaster {
  toastConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
  }

  call = (message, type) => toast[type](message, this.toastConfig)

  success = (message) => this.call(message, 'success')

  error = (message) => this.call(message, 'error')

  info = (message) => this.call(message, 'info')

  warning = (message) => this.call(message, 'warning')
}

export default new Toaster()
