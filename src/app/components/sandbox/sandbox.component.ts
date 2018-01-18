import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
    selector: 'sandbox',
    templateUrl: `./sandbox.component.html` ,
    styleUrls:['./sandbox.component.css']
})

export class SandboxComponent{
    name:string = 'John Poe';
    age:number = 45;
    person = {
        firstName: 'Steve',
        lastName: 'Smith'
    };
    hasChildren:boolean = true;
    numChildren:number = 2;
    city:any = 'San Diego';
    myNumbersArray:number[] = [1,2,3];
    myStringsArray:string[] = ['a', 'b', 'c'];
    myAnyArray:any[] = [1, 2, 'hello'];
    myTuple: [string, number] = ['hello', 1];

    customer:Customer;
    customers:Customer[];

    constructor(){
        console.log('constructor running');
        this.hasBirthday();
        this.hasChildren = false;

        this.customer ={
            id: 1,
            name: 'Johnny',
            email: 'jj@gmail.com'
        }
        this.customers =[
            {
                id: 1,
                name: 'Johnny',
                email: 'j@gmail.com'
            },
            {
                id: 2,
                name: 'Donny',
                email: 'd@gmail.com'
            }
        ]
    }

    hasBirthday(){
        this.age += 1;
    }

    showAge(){
        return this.age;
    }
}