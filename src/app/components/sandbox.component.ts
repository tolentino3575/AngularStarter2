import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello {{ name }} is {{ age }} years old</h1>
        <h2>My name is {{ person.firstName }}. Last name {{ person.lastName }}</h2>    
        <ul>
            <li>{{ 'Hello World' }}</li>
            <li>{{ 1+1 }}</li>
            <li>{{ showAge() }}</li>
        </ul>
    `
})

export class SandboxComponent{
    name = 'John Poe';
    age = 45;
    person = {
        firstName: 'Steve',
        lastName: 'Smith'
    }

    constructor(){
        console.log('constructor running');
        //this.age = 45;
        this.hasBirthday();
    }

    hasBirthday(){
        this.age += 1;
    }

    showAge(){
        return this.age;
    }
}