# Ummoji Update Server

Squirrel update server for the Ummoji desktop app.

## Deploying the Server

This app is running on Heroku at [ummoji-update-server.herokuapp.com](https://ummoji-update-server.herokuapp.com).

All pushes to the master branch are automatically deployed to Heroku.

## Promoting a Release

```
heroku config:set UMMOJI_STABLE_VERSION=1.1.0
```

## Example Query

Here's an example of what your app will ask for:

http://ummoji-update-server.herokuapp.com/updates?version=1.0.0

And what it will get back:

```json
{
  "name": "Ummoji v1.2.0",
  "notes": "The latest release of the app",
  "pub_date": "2017-03-30T23:39:18.392Z",
  "url": "https://ummoji-update-server.herokuapp.com/updates/Ummoji-1.2.0.dmg"
}
```

The DMG URL redirects to the URL of the asset on GitHub.
