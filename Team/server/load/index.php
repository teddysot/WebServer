<?php
/** =======================================================================
* LOAD - Loads a level or object back from the server
*
* @param: appid=username
* @param: name=filename
* @param: datatype='object|level'
* @param: payload=JSONString
*/
include '../AJAXServer.php';
include '../request.php';

class Server extends AJAXServer {

    public function handleAction( $request ) {

        $req = new Request( $request );

        $response = [];
        $response["error"] = -1;
        if (!$req->isValid()) {
            // Invalid action, get the error and tell the caller
            $response = $req->getError();
            return $response;
        }

        // OK, we have a valid request, lets do it.
        $basefolder = $req->baseFolder();
        $fileList = glob( $basefolder . $req->fileName );
        if ($fileList) {

            // We have a good one so load it into data
            $response['name'] = $req->name;
            $response['payload'] = file_get_contents( $fileList[0] );
        }

        // If we get here, we have good data so send it back
        $response["error"] = 0;

        return $response;
    }
}

$myServer = new Server ();
?>
