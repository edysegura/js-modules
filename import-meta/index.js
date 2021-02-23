import { dirname } from 'path'

console.log(import.meta)
// { url: "file:///home/user/my-module.js" }
// Ref.: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta

const url = new URL(import.meta.url)
console.log(url)
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

console.log(dirname(url.pathname))
// /Workspaces/js-es-modules/import-meta