var test = require('tape')

var moha = require('../es5/')

test('Improving Life Experiences', function(t) {
  t.plan(1)

  t.equal(moha.lifeExp('我是最好的'), '我是坠吼滴')
})
