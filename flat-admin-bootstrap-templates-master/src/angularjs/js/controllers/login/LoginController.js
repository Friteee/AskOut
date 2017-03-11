class LoginController {
  constructor($timeout) {
    this.submit = this.submit.bind(this)
    this.$timeout = $timeout

    this.status = {
      loading: false
    }
  }

  submit(username, password) {
    this.status.loading = true
    this.$timeout(() => {
      this.status.loading = false
    }, 3000)
  }
}

export default LoginController