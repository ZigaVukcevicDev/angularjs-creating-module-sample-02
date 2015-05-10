angular.module('demo', []);

angular.module('demo').controller('DemoController', function($scope) {
    $scope.tasks = [];
    
    $scope.create = function(task) {
        $scope.tasks.push(task);
    }

    $scope.remove = function(index) {
        $scope.tasks.splice(index);
    }
});