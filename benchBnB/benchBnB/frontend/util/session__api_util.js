
export const postUser = user => (
  $.ajax({
    url: '/api/users',
    method: 'post',
    data: {user: user}
  })
)

export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'post',
    data: { user: user }
  })
)

export const destroySession = () => (
  $.ajax({
    url: '/api/session',
    method: 'delete',

  })
)