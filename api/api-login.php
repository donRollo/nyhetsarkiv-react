<?php
	
	include 'incs/dbConn.php';

	// *****************
	// Ta emot variabler  
	// *****************
	
	$myRequestPost = file_get_contents('php://input');
    $myPost = json_decode($myRequestPost, true);
    $myUserName = trim($myPost['user_name']);
	$myUserPassword = trim($myPost['user_password']);
	
	// *********************
	// Skapa datum-variabler  
	// *********************
	$dtmDateDate 		= getDateDate();
	$dtmDateNow 		= getDateNow();
	
	// *****************************************************************
	// Kontrollera om det finns en användare med detta namn och lösenord 
	// *****************************************************************
	$sql = "SELECT COUNT(*) AS finnsDenna ";
	$sql = $sql . "FROM tbl_nyheter_user ";
	$sql = $sql . "WHERE ";
	$sql = $sql . "user_name = '$myUserName' ";
	$sql = $sql . "AND ";
	$sql = $sql . "user_password = '$strUserPassword'";
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
		$sql = $sql . "user_status ";
		$sql = $sql . "FROM tbl_nyheter_user ";
		$sql = $sql . "WHERE ";
		$sql = $sql . "user_name = '$myUserName' ";
		$sql = $sql . "AND ";
		$sql = $sql . "user_password = '$strUserPassword'";
		$result = mysqli_query($conn, $sql);
		$data = mysqli_fetch_assoc($result);
		
		// *********
		// Variabler 
		// *********
		$getUserID = ceil($data["user_id"]);
		$getUserNiceName = trim($data["user_nice_name"]);
		$getUserStatus = ceil($data["user_status"]);
				
		// *****************
		// Hämta antal login 
		// *****************		
		$sql = "SELECT count_login ";
		$sql = $sql . "FROM tbl_nyheter_user ";
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
		$sql = "UPDATE tbl_nyheter_user SET ";
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
   		$myMultiárray['ser_nice_name'] = $getUserNiceName;
   	} else {
		$myMultiárray['user_exist'] = 0;
   		$myMultiárray['status'] = 0;
   		$myMultiárray['ser_nice_name'] = "";
	}

	// ******************************
	// Returnera objektet som en json 
	// ******************************
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($myMultiárray);
    exit();

?>