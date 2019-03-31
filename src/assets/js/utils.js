/**
 * 图片地址
 *
 * @export
 * @param {any} file
 * @returns
 */
export function parseFileURL (file) {
  return `${window.PLATFORM_CONFIG.fileURL}${file}`
}
export function throttle (delay, noTrailing, callback, debounceMode) {
  var timeoutID
  var lastExec = 0
  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback
    callback = noTrailing
    noTrailing = undefined
  }
  function wrapper () {
    var self = this
    var elapsed = Number(new Date()) - lastExec
    var args = arguments
    function exec () {
      lastExec = Number(new Date())
      callback.apply(self, args)
    }
    function clear () {
      timeoutID = undefined
    }
    if (debounceMode && !timeoutID) {
      exec()
    }
    if (timeoutID) {
      clearTimeout(timeoutID)
    }
    if (debounceMode === undefined && elapsed > delay) {
      exec()
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(
        debounceMode ? clear : exec,
        debounceMode === undefined ? delay - elapsed : delay
      )
    }
  }
  return wrapper
}
