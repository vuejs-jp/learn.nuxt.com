export default defineNuxtRouteMiddleware((to) => {
  navigateTo(`https://learn.nuxt.com/ja${to.path}`, { redirectCode: 301, external: true })
})
