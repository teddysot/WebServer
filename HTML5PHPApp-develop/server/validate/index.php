<?php
include '../AJAXServer.php';

class Server extends AJAXServer {
    // ========================================================================
    //
    // Login Handler
    //
    public function handleAction( $request ) {
        // The 'action' requested is named for the folder this server lives in

        $bev = $request['favorite_beverage'];
        $eatery = $request['favorite_restaurant'];

        // Authenticate with username and password
        // Here is the actual worker function, this is where you do your server sode processing and
        // then generate a json data packet to return.

        // Here is what we will send back (echo) to the person that called us.
        // fill this dictionary with attribute => value pairs, then
        // encode as a JSON string, then
        // echo back to caller
        $response = [ ];

        // Do what you need to do with the info. The following are some examples.
        // This is the real set of actual things we use
        $response["error"] = -1;
        $response["favorite_beverage"] = "Coke";
        $response["favorite_restaurant"] = $eatery;
        $response["gender"] = $request["gender"];
        $response["msg"] = "Your favorite beverage is: " . $response["favorite_beverage"];
        $response["json"] = json_encode( $response );
        $response["error"] = 0;

        return $response;
    }
}

$myServer = new Server ();
?>
