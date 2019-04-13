/**
 * @copyright: (C) 2014-2019 Kibble Online Inc in cooperation with Vancouver Film School.
 * @author:    Scott Henshaw {@link mailto:shenshaw@vfs.com} 
 */
'use strict';

// [SH] Choose one, delete the other...
import App from './App.js';
import Game from './Game.js';

// KISS just load the right thing and tell it to run...
$(document).ready( async event => {  
    App.run() 
});
