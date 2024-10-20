import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  email: string = 'site@gmail.com';
  phone: string = '123-456-7890';
  address: string = '1234 Main St, City, State 12345';

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(500)])
  });

  sendMessage(){
    console.log(this.contactForm.value);
    
  }

}
