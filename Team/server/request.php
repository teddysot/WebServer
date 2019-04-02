<?php

define("ROOT_FOLDER", "../data/");

class Request {
    /**
     * @input:
     * $request['userID'] =    "username"             // student user name aka folder
     * $request['name'] =     "name_of_this_thing"  // give it a name
     * $request['dataType'] = "level|object"        // tye of data asset
     * $request['payload'] =  '{ data: "some-json-data" }'
     * $request['action'] =  '{ data: "some-json-data" }'
     * note that the payload is saved as is, no validation is done.
    */
    private $error = 0;
    private $errMsg = "OK";

    public $userID =    '';
    public $name =     '';
    public $fileName = '';
    public $type =     'level';
    public $payload =  '{}';
    public $action =   'default';

    public function __construct( $request ) {

        if (isset( $request['userid'] ))   $this->userID = strtolower( $request['userid'] );
        if (isset( $request['name'] ))     $this->name = strtolower( $request['name'] );
        $this->fileName =                  $this->name . ".json";
        if (isset( $request['type'] ))     $this->type = strtolower( $request['type'] );
        if (isset( $request['action'] ))   $this->action = strtolower( $request['action'] );
        if (isset( $request['payload'] ))  $this->payload = $request['payload'];
    }

    public function getError() {
        return [
            'error' =>  $this->error
          , 'errMsg' => $this->errMsg
        ];
    }

    private function setError( $code, $msg ) {

        $this->error = $code;
        $this->errMsg = $msg;
    }

    public function baseFolder() {

        $basefolder = ROOT_FOLDER . $this->userID . "/";
        if ($this->type == 'object') {
            $basefolder .= "library/";
        }

        $parts = explode('/', $basefolder );
        $dir = '';
        foreach ( $parts as $folder )
            if (!is_dir( $dir .= "$folder/")) 
                mkdir( $dir, 777 );
       
        /*
        if (!file_exists( $basefolder )) {
            mkdir( $basefolder, 755 );
        }
        */
        return $basefolder;
    }

    public function baseFileList() {

    }

    public function isValid() {
        // TODO: make sure we lowercase the request dict names
        // TODO: move this off into the realm of a JSON file
        $this->setError( 0, "Action is Valid");

        return true;
    }
}
?>
