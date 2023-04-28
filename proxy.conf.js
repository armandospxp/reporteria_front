// {
//     "/api": {
//         "target": "http://127.0.0.1:8000",
//         "secure": false,
//         "pathRewrite": {
//             "^/api": ""
//         },
//         "logLevel": "debug"
//     }
    
// }


const PROXY_CONFIG = [
    {
    context: [
        "/api/reporteria",
    ],
    "target": "http://127.0.0.1:8000",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": false,
    // "pathRewrite": {
    //     "^/": ""
    // },
    //"bypass": function(proxyRes, req, res) {}
    },
    // {
    //   context: [
    //     "/oauth2/v1/",
    //   ],
    // // "target": "http://10.150.44.120:8080",
    // "target": "https://jbdmzpre.personal.com.py",
    //   "secure": true,
    //   "logLevel": "debug",
    //   "changeOrigin": true,
    //   "pathRewrite": {
    //     "^/": ""
    //   },
    //   // "bypass": function (proxyRes, req, res) {}
    // }
];

module.exports = PROXY_CONFIG;
