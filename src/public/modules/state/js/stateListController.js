var listVars = {
    filter: '',
    page: 0
};

/**
 *
 *
 *
 */
function StateListController (State, $scope, Message) {


    $scope.stateList = [];
    $scope.message = Message.success("");
    $scope.filter = listVars.filter;
    $scope.page = listVars.page;
    $scope.loading = false;
    $scope.dataTable = {
        data: []
    };
    
    //Data table actions
    var actions = [];
        //Edit action
        actions.push({
            title: '<i class="ui edit icon"></i>',
            href: '/#state/:id',
            className: 'ui button'
        });
        //Delete action
        actions.push({
            title: '<i class="ui remove icon"></i>',
            className: 'ui button',
            onclick: function (id) {
                $scope.remove(id);    
            }
        });
    
    function refresh () {

        var params, promise;
        
        promise = State.query({}).$promise;

        $scope.loading = true;

        promise.then(function (stateList) {
            var data = [];
            stateList.forEach(function(item) {
                data.push([
                    item.unit,
                    item.name,
                    item._id
                ])
            });
            // ngDataTable directive is watching this attribute
            // So, dataTable will be updated when it changes
            $scope.dataTable = {
                data: data,
                actions: actions
            };

            $scope.message = Message.success(stateList.length + ' contatos encontrados.');
            $scope.loading = false;
        });
        promise.catch(function (error) {
            console.log(error);
            $scope.menssage = Message.error('Não foi possível obter a lista de estados.');
        });
    }

    $scope.remove = function (id) {
        var promise = State.delete({id: id}).$promise;
        promise.then(function () {
            refresh();
            $scope.message =  Message.success('Estado removido com suecesso.');
        });
        promise.catch(function (erro) {
            $scope.message = Message.error('Erro ao remover o estado.');
            console.log(erro);
        });
    };

    refresh();
}


angular.module('app.state').controller('StateListController', StateListController);