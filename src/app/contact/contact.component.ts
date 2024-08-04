import { Component, Input } from '@angular/core';
interface InputValue{  name:string;  type:string;  placeholder:string;}
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
inputv:InputValue[]=[{name:'name',type:'text',placeholder:'Enter your name'},
  {name:'email',type:'email',placeholder:'Enter your email'},
  {name:'password',type:'password',placeholder:'Enter your password'}]
}
