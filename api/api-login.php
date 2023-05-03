<?php
	
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Max-Age: 1000");
	header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
	header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

	include 'incs/dbConn.php';
	include 'incs/includeFunctions.php';

	// http://dev-nyheter-api.local/api-login.php?user_name=nisse&user_password=abc123

	// *****************
	// Ta emot variabler  
	// *****************
	
	$myRequestPost = file_get_contents('php://input');
    $myPost = json_decode($myRequestPost, true);
    $myUserName = trim($myPost['user_name']);
	$myUserPassword = trim($myPost['user_password']);
		
	// $myUserName = trim($_REQUEST['user_name']);
	// $myUserPassword = trim($_REQUEST['user_password']);
	
	// *********************
	// Skapa datum-variabler  
	// *********************
	$dtmDateDate = getDateDate();
	$dtmDateNow = getDateNow();
	
	// *****************************************************************
	// Kontrollera om det finns en användare med detta namn och lösenord 
	// *****************************************************************
	$sql = "SELECT COUNT(*) AS finnsDenna ";
	$sql = $sql . "FROM news_users ";
	$sql = $sql . "WHERE ";
	$sql = $sql . "user_nice_name = '$myUserName' ";
	$sql = $sql . "AND ";
	$sql = $sql . "user_password = '$myUserPassword'";
	$result = mysqli_query($conn, $sql);
	$data = mysqli_fetch_assoc($result);
	$intFinnsDenna = $data['finnsDenna'];
	
	// Om det finns en användare	
	if ($intFinnsDenna == 1) {
	    
		// *******************************
		// Hämta data om aktuell användare 
		// *******************************
		$sql = "SELECT ";
		$sql = $sql . "user_id, ";
		$sql = $sql . "user_nice_name, ";
		$sql = $sql . "user_first_name, ";
		$sql = $sql . "user_last_name, ";
		$sql = $sql . "user_status ";
		$sql = $sql . "FROM news_users ";
		$sql = $sql . "WHERE ";
		$sql = $sql . "user_nice_name = '$myUserName' ";
		$sql = $sql . "AND ";
		$sql = $sql . "user_password = '$myUserPassword'";
		$result = mysqli_query($conn, $sql);
		$data = mysqli_fetch_assoc($result);
		
		// *********
		// Variabler 
		// *********
		$getUserID = ceil($data["user_id"]);
		$getUserFirstName = trim($data["user_first_name"]);
		$getUserLastName = trim($data["user_last_name"]);
		$getUserStatus = ceil($data["user_status"]);
				
		// *****************
		// Hämta antal login 
		// *****************		
		$sql = "SELECT count_login ";
		$sql = $sql . "FROM news_users ";
		$sql = $sql . "WHERE ";
		$sql = $sql . "user_id = $getUserID ";
		$result = mysqli_query($conn, $sql);
		$data = mysqli_fetch_assoc($result);
		
		// *********
		// Variabler 
		// *********
		$intCountLogin 		= $data['count_login'];
		$intCountLoginNew 	= ceil($intCountLogin+1);
		$dtmLatestLogin 	= $dtmDateNow;
		
		// ***************************************
		// Uppdatera med statistik om inloggningar 
		// ***************************************
		$sql = "UPDATE news_users SET ";
		$sql = $sql . "count_login = $intCountLoginNew, ";
		$sql = $sql . "latest_login = '$dtmLatestLogin' ";
		$sql = $sql . "WHERE ";
		$sql = $sql . "user_id = $getUserID ";
		mysqli_query($conn, $sql);

		// *************************
		// Stäng databasanslutningen 
		// *************************
		$conn->close();
		
	}

	// *****************************
	// Skapa ett objekt med all data 
	// *****************************
	$myMultiárray = array();
	if ($intFinnsDenna == 1) {
		$myMultiárray['user_exist'] = 1;
   		$myMultiárray['status'] = $getUserStatus;
   		$myMultiárray['user_first_name'] = $getUserFirstName;
   		$myMultiárray['user_last_name'] = $getUserLastName;
   	} else {
		$myMultiárray['user_exist'] = 0;
   		$myMultiárray['status'] = 0;
   		$myMultiárray['user_first_name'] = "";
   		$myMultiárray['user_last_name'] = "";
	}

	// echo "<pre>";
	// print_r($myMultiárray);
	// echo "<pre>";
	// die();

	// ******************************
	// Returnera objektet som en json 
	// ******************************
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($myMultiárray);
    exit();

?>