# Ummoji Update Server

Squirrel update server for the Ummoji desktop app.

## Deploying the Server

This app is running on Heroku at [ummoji-update-server.herokuapp.com](https://ummoji-update-server.herokuapp.com).

All pushes to the master branch are automatically deployed to Heroku.

## Promoting a Release

```
heroku config:set UMMOJI_STABLE_VERSION=1.1.0
```

## Downloading Releases

The following convenience URLs redirect to the latest release for a given platform:

- [updates/ummoji-linux.zip](https://ummoji-update-server.herokuapp.com/updates/ummoji-linux.zip)
- [updates/ummoji-mac.zip](https://ummoji-update-server.herokuapp.com/updates/ummoji-mac.zip)
- [updates/ummoji-windows.zip](https://ummoji-update-server.herokuapp.com/updates/ummoji-windows.zip)
