<?php

require "Comment.php";

header("Access-Control-Allow-Origin:*");   
header("Content-type: application/json");   
$comment = Comment::getAll();

echo json_encode($comment);
