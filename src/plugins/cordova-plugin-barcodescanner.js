exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof cordova.plugins.barcodeScanner === 'undefined') {
      return cb(false)
    }

    // pass through the barcodescanner object
    Vue.cordova.barcodeScanner = cordova.plugins.barcodeScanner

    return cb(true)

  }, false)
}
