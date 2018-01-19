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

    showName:boolean = true;
    greeting:number = 1;

    customer:Customer;
    customers:Customer[];

    people = ['Rick','Darryl', 'Carl', 'Glenn'];
    people2 =[
        {
            firstName: 'Rick',
            lastName: 'Grimes'
        },
        {
            firstName: 'Darryl',
            lastName: 'Dixon'
        }
    ];

    imageUrl = 'http://lorempixel.com/400/200';
    isUnchanged:boolean = true;

    constructor(){
        this.hasBirthday();

        this.customer ={
            id: 1,
            name: 'Johnny',
            email: 'jj@gmail.com'
        };

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
        ];

        this.people[1] = 'Carol';
    }

    hasBirthday(){
        this.age += 1;
    }

    showAge(){
        return this.age;
    }
}