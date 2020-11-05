<?php

    $array = array("subject" => "", "name" => "", "email" => "", "message" => "", "subjectError" => "", "nameError" => "", "emailError" => "", "messageError" => "", "isSuccess" => false);
    $emailTo = "jeremy.bertin76@jeremybertin.at";

    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $array["subject"] = test_input($_POST["subject"]);
        $array["name"] = test_input($_POST["name"]);
        $array["email"] = test_input($_POST["email"]);
        $array["message"] = test_input($_POST["message"]);
        $array["isSuccess"] = true;
        $emailText = "";

        if (empty($array["subject"]))
        {
            $array["subjectError"] = "Field required";
            $array["isSuccess"] = false;
        }
        else
        {
            $emailText .= "Subject: {$array['subject']}\n";
        }

        if (empty($array["name"]))
        {
            $array["nameError"] = "Field required";
            $array["isSuccess"] = false;
        }
        else
        {
            $emailText .= "Name: {$array['name']}\n";
        }

        if(!isEmail($array["email"]))
        {
            $array["emailError"] = "Field required";
            $array["isSuccess"] = false;
        }
        else
        {
            $emailText .= "Email: {$array['email']}\n";
        }

        if (empty($array["message"]))
        {
            $array["messageError"] = "Field required";
            $array["isSuccess"] = false;
        }
        else
        {
            $emailText .= "Message: {$array['message']}\n";
        }

        if($array["isSuccess"])
        {
            $headers = "From: {$array['subject']} {$array['name']} <{$array['email']}>\r\nReply-To: {$array['email']}";
            mail($emailTo, "Un message de votre site", $emailText, $headers);
        }

        echo json_encode($array);

    }

    function isEmail($email)
    {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    function test_input($data)
    {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

?>
