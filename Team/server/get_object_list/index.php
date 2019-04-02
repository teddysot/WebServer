<?php
include '../AJAXServer.php';
include '../request.php';

/** =======================================================================
* get_object_list - Loads a level or object back from the server
*
* @param: appid=username
* @param: name=filename
* @param: payload=JSONString
*/
class Server extends AJAXServer {

    public function handleAction( $request ) {

        $req = new Request( $request );
        $req->type = 'object';

        $response = [];
        $response["error"] = -1;
        if (!$req->isValid()) {
            // Invalid action, get the error and tell the caller
            $response = $req->getError();
            return $response;
        }
        
       // OK, we have a valid request, lets do it.
       $basefolder = $req->basefolder();
       $fileList = glob( $basefolder."*.json" );
       if ($fileList) {

           $fileNameList = [];
           foreach ($fileList as $file) {
               $info = pathinfo( $file );
               $fileNameList[$info['filename']] = $info['basename'];
           }
           $response['payload'] = $fileNameList;
       }

       // If we get here, we have good data so send it back
       $response["error"] = 0;

        return $response;
    }
}

$myServer = new Server ();
?>
