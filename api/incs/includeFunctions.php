<?php

	function getDateDate() {
		$objTime = time();
		$tmpDate = date("Y-m-d",$objTime);
		return $tmpDate;
	}

	function getDateNow() {
		$objTime = time();
		$tmpDate = date("Y-m-d H:i:s",$objTime);
		return $tmpDate;
	}

?>