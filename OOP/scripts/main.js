/*
Template App
(c) Copyright 2019 Scott Henshaw, In cooperation with VFS, All right reserved.
*/
'use strict';

const DEBUG = false;

import App from "./app.js";

document.addEventListener("DOMContentLoaded", event => {

    // cool magic here!
    const app = new App();
    app.run();
    if(DEBUG)
    {
        console.log("Made it to stage a");
    }
});