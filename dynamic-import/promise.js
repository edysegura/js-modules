import('./logger.js')
  .then(({ Logger }) => {
    Logger.info('Hi from dynamic import!')
  })
