var myApp = angular.module("myShoppingApp",[]);

myApp.directive("mylist",function(){
  return {
    scope: true,
    restrict:'E', //CARREGAR: A atributo, E elemento, C classes, EAC tudo reunido
    //template:'<span ng-transclude></span><ol><li>Milk</li></ol>',
    templateUrl:'list.html',
    replace:false,  //SE VAI SUBSTITUIR A DIRETIVA myList PELO CONTEUDO DO TEMPLATE,SE FLSE VAI DEIXAR A DIRETIVA E CARREGA LA JUNTO AO HTML, TRUE TIRA A DIRETIVA E CARREGA O HTML
    transclude:false     //SE TIVER QUALQUE HTML DENTRO DA DIRETIVA VAI APAGALO OU DEIXA LO, TRUE DEIXA ENTÃO NO TEMPLATE TEM QUE COLOCAR <span ng-transclude></span><ol><li>Milk</li></ol> O ng-transclude VAI MANTER O HTML INTACTO, FALSE APAGA
  }
})

myApp.controller("ngController",["$scope",function($scope){
  $scope.message = "NG CONTROLLER"
}])

myApp.controller("MainController", function($scope) {
  $scope.items = [
    {name:'Milk', checked:true},
    {name:'Eggs', checked:false},
    {name:'Cheese', checked:false},
    {name:'Bread', checked:false}];
    
  $scope.newItem = '';
 
  $scope.addItemToList = function() {
  	if ($scope.newItem.trim() != '') {
    	$scope.items.push({name:$scope.newItem, checked:false});
    	$scope.newItem = '';
    }
  };
    
    $scope.removeItem = function(index) {
        $scope.items.splice(index, 1);
  };
 
});

