angular.module('app.util').factory('Message', function () {
    
    var Message = {

      success: function (text) {
        return {
          text: text,
          type: 'success'
        }
      },
      info: function (text) {
        return {
          text: text,
          type: 'warning'
        }
      },
      error: function (text) {
        return {
          text: text,
          type: 'danger'
        }
      }
    }

    return Message;
});