//Check if the user is logged in
if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true) {
 //User is logged in, check their role
  switch ($_SESSION['role']) {
    case 'admin':
    //Allow access to admin resources
      break;
    case 'user':
     //Allow access to user resources
      break;
    default:
    //Deny access
      header('HTTP/1.1 403 Forbidden');
      exit;
  }
} else {
  //User is not logged in, redirect to login page
  header('Location: /login.php');
  exit;
}