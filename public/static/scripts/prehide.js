console.log('prehiding....')
!(function (e, a, n, t) {
  var i = e.head
  if (i) {
    if (a) return
    var o = e.createElement('style')
    ;(o.id = 'alloy-prehiding'),
      (o.innerText = n),
      i.appendChild(o),
      setTimeout(function () {
        o.parentNode && o.parentNode.removeChild(o)
      }, t)
  }
})(
  document,
  document.location.href.indexOf('adobe_authoring_enabled') !== -1,
  '.prehide { opacity: 0 !important }',
  3000
)
