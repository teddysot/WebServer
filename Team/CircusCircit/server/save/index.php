<?php
/** =======================================================================
* SAVE
*
* @param: userid=username
* @param: name=filename
* @param: datatype='object|level'
* @param: payload=JSONString
*/
include '../AJAXServer.php';
include '../request.php';

class Server extends AJAXServer {

    public function handleAction( $request ) {

        $req = new Request( $request );

        if (!$req->isValid()) {
            // Invalid action, get the error and tell the caller
            $response = $req->getError();
            return $response;
        }
        // OK, we have a valid request, lets do it.
        $response = $this->do_save( $req );
        return $response;
    }

    public function do_save( $req ) {
        // Look in the base folder for the levels for this user
        $response = [];
        $response["error"] = -1;

        $basefolder = $req->baseFolder();

        // We have a good one so load it into data
        $response['name'] = $req->name;
        $response['bytes'] = file_put_contents( $basefolder . $req->fileName, $req->payload );

        // If we get here, we have good data so send it back
        $response["error"] = 0;
        return $response;
    }
}

$myServer = new Server ();
?>
