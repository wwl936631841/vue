const prefix = '' // api地址前缀
export default(config => {
    return Object.keys(config).reduce((copy, name) => {
      copy[name] = `${prefix}$config[name]`
      return copy
    }, {})
})({
  // example api
  "getExampleData": "/api/example/data" 
})