<?php 
function readScores(){
	$_SESSION['scores'] = json_decode(file_get_contents('high_scores.txt'), true);
}

function trySave($name, $score){
	//loop though and check score.
	//if it beats at any point, replace and start pushing down

	for($i = 0; $i < sizeof($_SESSION['scores']); $i++){

		$current = $_SESSION['scores'][$i];

		if($score >= $current['score']){
			//replace, start pushing down
			$temp = $current;

			$_SESSION['scores'][$i]['name'] = $name;
			$_SESSION['scores'][$i]['score'] = $score;
			for($j = $i+1; $j < sizeof($_SESSION['scores']); $j++){
				$temp2 = $_SESSION['scores'][$j];
				$_SESSION['scores'][$j] = $temp;
				$temp = $temp2;
			}

			break;
			
		}
	}

	writeScores();
}

function writeScores(){

	file_put_contents('high_scores.txt.', json_encode($_SESSION['scores']));

}

function outputScoreTable(){
	$table = "<table>";

	$table = $table . "<th>Rank</th>";
	$table = $table . "<th>Name</th>";
	$table = $table . "<th>Score</th>";

	for($i = 0; $i < sizeof($_SESSION['scores']); $i++){

		$table = $table . "<tr>";

		$table = $table . "<td>" . ($i+1) . "</td>";
		$table = $table . "<td>" . $_SESSION['scores'][$i]["name"] . "</td>";
		$table = $table . "<td>" . $_SESSION['scores'][$i]["score"] . "</td>";

		$table = $table . "</tr>";
	}

	$table = $table . "</table>";

	return $table;
}

function resetScores(){
	for($i = 0; $i < sizeof($_SESSION['scores']); $i++){

		$_SESSION['scores'][$i]['name'] = "Player";
		$_SESSION['scores'][$i]['score'] = 0;
	}

	writeScores();

}

function isHighScore($score){
	for($i = 0; $i < sizeof($_SESSION['scores']); $i++){

		if($score >= $_SESSION['scores'][$i]['score']){
			return 1;
		}
	}

	return 0;
}

?>

