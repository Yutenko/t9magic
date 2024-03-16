<?php
  $files = array_diff(scandir("./codes"), array('.', '..'));
  $codes = array();

  foreach ($files as $file) {
    $fileInfo = pathinfo($file);
    array_push($codes,$fileInfo['filename']);
  }

  echo json_encode($codes);
  
?>