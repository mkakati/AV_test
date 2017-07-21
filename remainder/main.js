var ngTodo = angular.module('ngTodo', []);

ngTodo.controller('mainController',function($scope){
    
    $scope.todoArray = [
        {
            title : 'Project',
            details : 'Complete the angular Project.'
        },
        {
            title : 'Sleep',
            details : 'Sleep 10hrs regularly'
        },
        {
            title : 'Youtube',
            details : 'Kapil Sharma show'
        },
        {
            title : 'Home',
            details : 'Luggage packing.'
        },
        {
            title : 'Food',
            details : 'M a pork-lover'
        }
                        ];
    
    $scope.addTodo = function(newTodo){
        $scope.todoArray.splice(0,0, { title : newTodo.name, details : newTodo.details});
    }
    
    $scope.removeTodo = function(index){
        $scope.todoArray.splice(index,1);
    }
});