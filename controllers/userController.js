const userController = {};

userController.buildPPage = async function  (req, res, next) {
    res.render('p/me', {
        title: "This User - CareerSphere",
        layout: "layouts/pLayouts"
    })
}


module.exports = userController;