//  get user
exports.getUser = (req, res) => {
  req.isAuthenticated() 
    ? res.json({ displayName: req.user.displayName })
    : res.status(401).json({ error: 'Not logged in' });
};