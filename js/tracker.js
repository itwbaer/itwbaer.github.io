var app = angular.module('tracker', []);

app.filter('html', ['$sce', function ($sce) { 
    return function (code) {
        return $sce.trustAsHtml(code);
    };    
}]);

app.controller('Controller', ['$scope', function($scope) {
	
	$scope.dTags = ["<img src='images/blank_dice.png'>","<img src='images/soldier_dice.png'>", "<img src='images/prayer_dice.png'>", "<img src='images/oracle_dice.png'>"];
	$scope.diceImgs = [$scope.dTags[0], $scope.dTags[0], $scope.dTags[0], $scope.dTags[0], $scope.dTags[0]];
	$scope.counts = [0, 0, 0];

	$scope.rolls = 0;
	$scope.temple = 10000;

	$scope.addCount = function(index){
		$scope.counts[index]++;
	}

	$scope.subtractCount = function(index){
		if($scope.counts[index] > 0){
			$scope.counts[index]--;
		}
		

	}

	$scope.roll = function(){
		var val1 = Math.floor((Math.random() * 3) + 1);
		var val2 = Math.floor((Math.random() * 3) + 1);
		var val3 = Math.floor((Math.random() * 3) + 1);
		var val4 = Math.floor((Math.random() * 3) + 1);
		var val5 = Math.floor((Math.random() * 3) + 1);

		$scope.diceImgs[0] = $scope.dTags[val1];
		$scope.diceImgs[1] = $scope.dTags[val2];
		$scope.diceImgs[2] = $scope.dTags[val3];
		$scope.diceImgs[3] = $scope.dTags[val4];
		$scope.diceImgs[4] = $scope.dTags[val5];

		$scope.counts[val1-1]++;
		$scope.counts[val2-1]++;
		$scope.counts[val3-1]++;
		$scope.counts[val4-1]++;
		$scope.counts[val5-1]++;

		$scope.rolls++;

	}

	$scope.playCard = function(index){
		var cost = parseInt(prompt("Cost of the card?", 0));

		if(cost != NaN && cost <= $scope.counts[index])
		{
			$scope.counts[index] = $scope.counts[index] - cost;
		}
	}

	$scope.subtractLife = function(){
		var amount = parseInt(prompt("Take how much damage?", 0));

		if(amount != NaN)
		{
			$scope.temple = $scope.temple - amount;
		}
	}

	$scope.addLife = function(){
		var amount = parseInt(prompt("Heal how much?", 0));

		if(amount != NaN)
		{
			$scope.temple = $scope.temple + amount;
		}
	}	

}]);