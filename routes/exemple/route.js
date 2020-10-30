const version = require('./version.json');

module.exports = (app) => {
  app.get('/exemple/:plateforme/:version/:versionDuJeu', (req, res) => {
    switch (`${req.params.plateforme} ${req.params.version} ${req.params.versionDuJeu}`) {
      case 'android demo current':
        return res.send(version.android.demo.current);
      case 'android demo next':
        return res.send(version.android.demo.next);
      case 'android starter current':
        return res.send(version.android.starter.current);
      case 'android starter next':
        return res.send(version.android.starter.next);
      case 'android complete current':
        return res.send(version.android.complete.current);
      case 'android complete next':
        return res.send(version.android.complete.next);
      case 'windows demo current':
        return res.send(version.windows.demo.current);
      case 'windows demo next':
        return res.send(version.windows.demo.next);
      case 'windows complete current':
        return res.send(version.windows.complete.current);
      case 'windows complete next':
        return res.send(version.windows.complete.next);
      default:
        return res.redirect('/');
    }
  });
};
