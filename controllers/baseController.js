const baseController = {}

baseController.buildLandingPage = async function (req, res) {
    try {
        res.render('index', {
            title: 'LeyOak Multiple-Purpose Business LTD - Investment & Portfolio Management',
            currentPage: "Home Page"
        });
    } catch (error) {
        console.error('Error building home page:', error);
        res.render('errors/error', {
            title: 'Error',
            message: 'An error occurred while building the home page',
        });
    }
};

module.exports = baseController