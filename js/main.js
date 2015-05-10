angular.module('demo', []);

angular.module('demo').controller('DemoController', function($scope) {
    $scope.calculate = function(montlyPayment, noMonths, interestRate) {
        amount = montlyPayment * (interestRate / 100 + 1) * noMonths;

        if (isNaN(amount)) {
            amount = 'premalo podatkov za izračun.';            
        } 

        $scope.amount = amount;
    }
});

angular.module('demo').controller('AnotherDemoController', function($scope) {
    $scope.calculate = function(montlyPayment, noMonths, interestRate) {
        amount = montlyPayment * noMonths;

        if (isNaN(amount)) {
            amount = 'premalo podatkov za izračun.';            
        } 

        $scope.amount = amount;
    }
});