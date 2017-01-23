	//console.log(angular);
	angular.module("moreDirectivesApp",[])
	.controller("moreDirectivesCtrl", moreDirectivesCtrl);

	function moreDirectivesCtrl(){
		this.myList = [1,2,3,4];
		this.PerList = [
			{"name":"Naaa", "age":"30"},
			{"name":"Nbbb", "age":"35"},
			{"name":"Nccc", "age":"40"},
			{"name":"Nddd", "age":"45"},
			{"name":"Neee", "age":"50"}

		];
	}
