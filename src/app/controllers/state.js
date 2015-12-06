var util = require("../util");

module.exports = function (app) {
    var controller = {},
        State = app.models.state;
    /*
     * 
     * @param {Object} req http request
     * @param {Object} res http response
     */
    controller.list = function (req, res) {
        var promise, 
            cursor,
            query = {};
        
        cursor = State.find()
        //State.find().sort({ sameField: 'value' });
        
        promise = cursor.exec();

        promise.then(
            /**
             * success callback
             */
            function (stateArray) {
                res.json(stateArray);
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
        promise = State.findById(_id).exec();
        promise.then(
            /**
             * success callback
             */
            function (state) {
                if (!state) {
                    throw new Error("State doesn't found");
                }
                beforeSend(state);
                res.json(state);
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
        promise = State.remove({"_id": _id}).exec();
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
     * @param {Object} state
     */
    function create (res, state) {
        var promise = State.create(state);
        promise.then(
            /**
             * success callback
             */
            function (result) {
                result = beforeSend(result);
                res.status(201).json();
            },
            /**
             * error catcher callback
             */
            function (error) {
                console.log(error);
                res.status(500).json(error);
            }
        );
    }
    /**
     * 
     *
     * @param {Object} state
     * @returns {Promise} promise
     */
    function update (res, state) {
        var id = state._id;
        delete state._id;
        var promise = State.findByIdAndUpdate(id, state).exec();
            promise.then(
                /**
                 * success callback
                 */
                function () {
                    state._id = id;
                    state = beforeSend(state);
                    res.status(201).json(state);
                },
                /**
                 * error catcher callback
                 */
                function (error) {
                    console.log(error);
                    res.status(500).json(error);
                }
            );
        return promise;
    }
    /**
     *  
     *
     * @param {Object} body
     * @returns {Object} state
     */
    function parseBody (body) {
        var state = {};
        // extract state data from body
        state = body;
        //
        return state;
    }

    function beforeSend (state) {
        var obj = {};

        return state;
    }
    /*
     * 
     * @param {Object} req http request
     * @param {Object} res http response
     */
    controller.save = function (req, res) {
        var promise,
            state =  parseBody(req.body);
            
        if (state._id) {
            promise = update(res, state);
        } else {
            promise = create(res, state);  
        }
    };

    return controller;
};