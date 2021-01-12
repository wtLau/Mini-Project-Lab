function validateInfo(values) {
  let errors = {}

  if (!values.username.trim()) {
    errors.username = 'Username required'
  }

  if (!values.email) {
    errors.email = 'Email required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }

  if (!values.password) {
    errors.password = 'password is required'
  } else if (values.password.length < 4) {
    errors.password =
      'password needs to be 4 characters or more'
  }

  if (!values.password2) {
    errors.password2 = 'Password is required'
  } else if (
    values.password !== values.password2
  ) {
    errors.password2 = 'Password does not match'
  }

  return errors
}

export default validateInfo
