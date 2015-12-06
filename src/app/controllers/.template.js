/**
 * Template controller
 *
 * Author: 
 * Description:
 *
 */
module.exports = function (app) {
    var controller = {},
        Template = app.models.template;
    /*
     * 
     * @param {Object} req http request
     * @param {Object} res http response
     */
    controller.list = function (req, res) {
        var promise, 
            cursor,
            query = {},
            // optional variables
            // page = req.query.page || 0,
            // limit = req.query.limit || 0,
            // filter = req.query.filter || '';

        // create query
        // query.name = new RegExp(filter, 'i');
        //

        cursor = Contact.find(query);
        
        // if(page) {    
        //     cursor.skip(page);
        // }
        
        // if(limit) {
        //     cursor.limit(limit);
        // }
        
        promise = cursor.exec();

        promise.then(
            /**
             * success callback
             */
            function (templateArray) {
                res.json(templateArray);
            },
            /**
             * error catcher callback
             */
            function (error) {
                console.error(error);
                res.status(500).json(error);
            }
        );
    };
    /*
     * 
     * @param {Object} req http request
     * @param {Object} res http response
     */
    controller.getById = function (req, res) {
        var _id = req.params.id,
        promise = Template.findById(_id).exec();
        promise.then(
            /**
             * success callback
             */
            function (template) {
                if (!template) {
                    throw new Error("Template doesn't found");
                }
                res.json(template);
            },
            /**
             * error catcher callback
             */
            function (error) {
                console.log(error);
                res.status(404).json(error);
            }
        );
    };
    /*
     * 
     * @param {Object} req http request
     * @param {Object} res http response
     */
    controller.remove = function (req, res) {
        var _id = req.params.id,
        promise = Template.remove({"_id": _id}).exec();
        promise.then(
            /**
             * success callback
             */
            function () {
                res.end();
            },
            /**
             * error catcher callback
             */
            function (error) {
                return console.error(error);
            }
        );
    };
    /**
     * 
     * @param {Object} template
     * @returns {Promise} promise
     */
    function create (template) {
        var promise = Template.create(req.body);
        
        return promise;
    }
    /**
     * 
     *
     * @param {Object} template
     * @returns {Promise} promise
     */
    function save (template) {
        var promise = Template.findByIdAndUpdate(_id, req.body).exec();
            delete agenda._id;
        return promise;
    }
    /**
     *  
     *
     * @param {Object} body
     * @returns {Object} template
     */
    function parseBody (body) {
        var template = {};
        // extract template data from body
        template = body;
        //
        return template;
    }
    /*
     * 
     * @param {Object} req http request
     * @param {Object} res http response
     */
    controller.save = function (req, res) {
        var promise,
            resStatus = 200,
            template =  parseBody(req.body);
            
        if (template._id) {
            promise = update(template);
        } else {
            promise = create(template);  
            resStatus = 201; 
        }

        promise.then(
            /**
             * success callback
             */
            function (template) {
                res.status(resStatus).json(template);
            },
            /**
             * error catcher callback
             */
            function (error) {
                console.log(error);
                res.status(500).json(error);
            }
        );
    };

    return controller;
}