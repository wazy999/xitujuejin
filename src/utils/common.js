const lazyload = (name) => (resolve) =>require([`@/view/${name}`],resolve)
export{
    lazyload
}