(async () => {
  const { Logger } = await import('./logger.js')
  Logger.info('This came from dynamic import!')
})()
