'use strict';

export default class Controller {
    constructor(name = 'component-name')
    {
        this.name = name;
        this.vm = {};
        this.data = () => {return this.vm}
        this.props = {};
        this.components = {/* we'll override this with our sub-components */};

        let localMethods = Object.getPrototypeOf( this );
        delete localMethods.constructor;
        let methodNameList = Object.getOwnPropertyNames( localMethods );

        this.methods = {};

        for(let name in methodNameList) {
            this.methods[methodNameList[name]] = localMethods[methodNameList[name]];
        }
    }
}