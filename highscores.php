<!DOCTYPE html>
<html>
<head>
	<?php 
		include 'util.php';
		session_start();
		readScores();
	?>
	<title>High Scores</title>
</head>

<body>
	<?php 
		echo outputScoreTable(); 
	?>
</body>

</html>