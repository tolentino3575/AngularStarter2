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
    name:string = 'John Poe';
    age:number = 45;
    person = {
        firstName: 'Steve',
        lastName: 'Smith'
    };
    hasChildren:boolean = true;
    city:any = 'San Diego';
    myNumbersArray:number[] = [1,2,3];
    myStringsArray:string[] = ['a', 'b', 'c'];
    myAnyArray:any[] = [1, 2, 'hello'];
    myTuple: [string, number] = ['hello', 1];
    unusable: void = undefined;
    u: undefined = undefined;
    n: null = null;
    

    constructor(){
        console.log('constructor running');
        //this.age = 45;
        this.hasBirthday();
        this.hasChildren = false;
    }

    hasBirthday(){
        this.age += 1;
    }

    showAge(){
        return this.age;
    }
}