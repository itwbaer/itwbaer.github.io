<?php
	include 'util.php';
	session_start();
	readScores();

	$data = json_decode(file_get_contents('php://input'), true);
	$id = $data['id'];
	$name = $data['name'];
	$score = $data['score'];

	if($id == "check"){
		echo isHighScore($score);
	}
	elseif($id == "save"){
		echo trySave($name, $score);
	}

?>