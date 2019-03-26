/* Copyright 2019 Scott Henshaw */
'use strict';

export default class Game {
    constructor() {

        let my = this.__private__ = {
            tick: 0,
            start: null
        };

        $('#nickname-form').on('submit', event => {

            event.preventDefault();

            let request = $(event.target).serialize();
            $post('server/login',request)
            .then(data=> {
                let result = $.parseJSON(data);
                if(result.error) {
                    return;
                }

                $('#result-area').html(result.msg);
            })
        })
    }
}