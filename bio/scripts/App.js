/*
Template App
(c) Copyright 2019 Scott Henshaw, In cooperation with VFS, All right reserved.
*/
'use strict';

class App{
    constructor() {
        // JavaScript goes here...
        let a = 6; // a number
        a += 5;

        let  title = "Hello";
        title += " World";

        this.doSomeStuff();
        let c = myobject.val1;
        
    }

    doSomeStuff()
    {
        let myobject = {
            val1:"this is cool",
            val2: 42
        };
    }
    update() 
    {
        console.log("Message: " + title);

        let el = document.querySelector('#element-id');
        el.innerHTML = title;
    }
    run() {}
}