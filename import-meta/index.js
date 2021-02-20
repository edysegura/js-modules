// Ref.: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta

import { dirname } from 'path'

console.log(import.meta)
// { url: "file:///home/user/my-module.js" }

console.log(new URL(import.meta.url))
// URL {
//   href: 'file:///home/edysegura/Workspaces/js-es-modules-1/import-meta/index.js',
//   origin: 'null',
//   protocol: 'file:',
//   username: '',
//   password: '',
//   host: '',
//   hostname: '',
//   port: '',
//   pathname: '/home/edysegura/Workspaces/js-es-modules-1/import-meta/index.js',
//   search: '',
//   searchParams: URLSearchParams {},
//   hash: ''
// }

console.log(dirname(import.meta.url))