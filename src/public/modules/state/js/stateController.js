/**
 *
 *
 */
function StateController ($scope, State, $routeParams) {

    var id = $routeParams.id,
        promise;

    if (id) {
        //retrive object from server
        promise = State.get({
            id: id  
        }).$promise;

        promise.then(function (state) {
            $scope.state = state;
        });

        promise.catch(function (erro) {
            $scope.message = {
                texto: 'Contato não existe. Novo state.'
            };
        });

    } else {
        $scope.state = new State();
    }


    $scope.save = function () {
        var promise = $scope.state.$save();
        
        promise.then(function () {
            $scope.mensagem = {texto: 'Salvo com sucesso'};
            // limpa o formulário
            //$scope.state = new State();
        });
        
        promise.catch(function (erro) {
            $scope.mensagem = {texto: 'Não foi possível salvar'};
        });
    };

    State.query(function (states) {
        $scope.states = states;
    });
}

angular.module('app.state').controller('StateController', StateController);