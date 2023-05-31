module.exports = async function(req, res, proceed){
    if (req.session.userId) {
        return proceed()
    }

    console.log('not logged in!')

    return res.redirect('/login')
}