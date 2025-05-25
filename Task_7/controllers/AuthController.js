exports.googleCallback = (req, res) => res.redirect('/');

//  logout
exports.logout = (req, res) => {
  req.logout(() => res.redirect('/'));
};