export default defineNuxtRouteMiddleware((to) => {
  // FIXME: import . meta . server が置換されてしまう
  if (import.meta.server)
    return

  const isSignedIn = JSON.parse(localStorage.getItem('isSignedIn') || 'false')

  if (!isSignedIn && to.path !== '/') {
    return navigateTo('/')
  }
  else {
    return true
  }
})
