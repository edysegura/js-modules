function doTheJobWithImportedModule({ Logger }) {
  Logger.info('Hi from dynamic import!')
}

import('./logger.js')
  .then(doTheJobWithImportedModule)
