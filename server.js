// const express = require('express')
// const next = require('next')
// const { createProxyMiddleware } = require("http-proxy-middleware")

// const port = process.env.PORT || 3001
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// const apiPaths = {
//     '/api': {
//         target: 'http://localhost:3001', 
//         pathRewrite: {
//             '^/api': '/api'
//         },
//         changeOrigin: true
//     }
// }

// const isDevelopment = process.env.NODE_ENV !== 'production'

// app.prepare().then(() => {
//   const server = express()
 
//   if (isDevelopment) {
//     server.use('/api', createProxyMiddleware(apiPaths['/api']));
//   }

//   server.all('*', (req, res) => {
//     return handle(req, res)
//   })

//   server.listen( (err) => {
//     if (err) throw err
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// }).catch(err => {
//     console.log('Error:::::', err)
// })
// // const express = require('express')
// // const next = require('next')
// // const { createProxyMiddleware } = require("http-proxy-middleware")

// // const port = process.env.PORT || 3000
// // const dev = process.env.NODE_ENV !== 'production'
// // const app = next({ dev })
// // const handle = app.getRequestHandler()

// // const apiPaths = {
// //     '/sslapi.com': {
// //         target: 'http://localhost:5000', 
// //         pathRewrite: {
// //             '^/sslapi.com': '/sslapi.com'
// //         },
// //         changeOrigin: true
// //     }
// // }

// // const isDevelopment = process.env.NODE_ENV !== 'production'

// // app.prepare().then(() => {
// //   const server = express()
 
// //   if (isDevelopment) {
// //     server.use('/sslapi.com', createProxyMiddleware(apiPaths['/sslapi.com']));
// //   }

// //   server.all('*', (req, res) => {
// //     return handle(req, res)
// //   })

// //   server.listen(port, (err) => {
// //     if (err) throw err
// //     console.log(`> Ready on http://localhost:${port}`)
// //   })
// // }).catch(err => {
// //     console.log('Error:::::', err)
// // })


// // const express = require('express')
// // const next = require('next')
    
// // const dev = process.env.NODE_ENV !== 'production'
// // const app = next({ dev })
// // const handle = app.getRequestHandler()
    
// // app.prepare()
// // .then(() => {
// //   const server = express()
    
// //   server.get('*', (req, res) => {
// //     return handle(req, res)
// //   })
    
// //   server.listen(3001, (err) => {
// //     if (err) throw err
// //     console.log('> Ready on http://localhost:3000')
// //   })
// // })
// // .catch((ex) => {
// //   console.error(ex.stack)
// //   process.exit(1)
// // })