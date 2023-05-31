module.export = function (req, res, proceed)  {
    if (req.session.userId) {
        const user = User.findOne({ id: req.session.userId })

        const get_endpoint = Endpoint.findOne({ user: user })

        if(get_endpoint) return proceed()
        else return '/login'
    }

    return '/login'
}