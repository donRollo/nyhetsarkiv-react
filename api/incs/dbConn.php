<?php

	// Databas-variabler
	$myServername = "";
	$myUserName = "";
	$myPassword = "";
	$myDbName = "";

	// Hämta alla env
	$myEnv = file_get_contents("../.env");
	
	// Skapa array baserat på radbryt
	$arrEnv = explode(PHP_EOL, $myEnv);
	
	// Loopa igenom rad för rad
	foreach ($arrEnv as $row) {

		// Skapa array baserat på =
		$arrRow = explode("=", $row);

		// Databasnamn
		if($arrRow[0] == "DB_NAME") {
			$myDbName = $row;
			$myDbName = str_replace("DB_NAME", "", $myDbName);
			$myDbName = substr($myDbName, 1);
		}

		// Användare 
		if($arrRow[0] == "DB_USER") {
			$myUserName = $row;
			$myUserName = str_replace("DB_USER", "", $myUserName);
			$myUserName = substr($myUserName, 1);
		} 

		// Lösenord
		if($arrRow[0] == "DB_PASSWORD") {
			$myPassword = $row;
			$myPassword = str_replace("DB_PASSWORD", "", $myPassword);
			$myPassword = substr($myPassword, 1);
		} 

		// Host
		if($arrRow[0] == "DB_HOST") {
			$myServername = $row;
			$myServername = str_replace("DB_HOST", "", $myServername);
			$myServername = substr($myServername, 1);
		} 

	}

	// Create connection
 	$conn = mysqli_connect($myServername, $myUserName, $myPassword, $myDbName);

 	// Check connection
 	if (!$conn) {
    	die("Connection failed: " . mysqli_connect_error());
	}

?>