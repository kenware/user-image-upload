import M from 'materialize-css'

const notify = (message, time) => {
  M.toast({ html: message, inDuration: time, classes: 'rounded #6b98c5 green' })
}

export default notify
