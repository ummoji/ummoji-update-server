require('dotenv-safe').load()

const express = require('express')
const app = express()
const url = 'https://ummoji-update-server.herokuapp.com'
const port = Number(process.env.PORT) || 5000
const downloadUrl = 'https://github.com/ummoji/ummoji-desktop/releases/download'
const homepageUrl = 'https://github.com/ummoji/ummoji-update-server'

app.set('port', port)

app.listen(app.get('port'), () => {
  console.log('Server is running on port', app.get('port'))
})

app.get('/', (request, response) => {
  response.redirect(homepageUrl)
})

app.get('/updates/:asset', (request, response) => {
  const asset = request.params.asset
  const version = process.env.UMMOJI_STABLE_VERSION
  response.redirect(`${downloadUrl}/v${version}/${asset}`)
})

app.get('/updates', (request, response) => {
  const version = request.query.version
  const latestRelease = process.env.UMMOJI_STABLE_VERSION
  if (version === latestRelease) {
    response.status(204).end()
  } else {
    response.json({
      name: `Ummoji v${latestRelease}`,
      notes: 'The latest release of the app',
      pub_date: new Date().toISOString(),
      url: `${url}/updates/ummoji-mac.zip`
    })
  }
})
