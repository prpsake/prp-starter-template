const Server = require('minikin')


;(async () => {
  const server = await Server.default.server()
  
  
  
  const options = {
    serverPath: '/',
  }
  
  
  
  const args = {
    template: 'dist',
    data: '/Users/jerome/Library/Application Support/PRP/user/documents/invoices/3d5c59c4-4856-4b5b-9573-40786eeee9ee87/data.json'
  }
  
  
  
  server.routes({
    [`GET ${options.serverPath}`]: () => Server.Response.fromFile(`${args.template}/index.html`),
    [`GET ${options.serverPath}data`]: () => Server.Response.fromFile(args.data, null, null),
    "GET *": req => Server.Response.fromFile(`${args.template}${req.url}`)
  })
})()