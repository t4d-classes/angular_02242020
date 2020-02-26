import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  get nameValid() {

    const c = this.contactForm.get('name');

    return c.errors.required && c.touched;
  }

  ngOnInit(): void {


    // option 1 - without form builder
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl(0),
      phone: new FormControl(''),
      email: new FormControl(''),
    });

    // option 2 - with form builder
    this.contactForm = this.fb.group({
      name: [ '', { validators: [ Validators.required ] } ],
      age: 0,
      phone: '',
      email: '',
    });
  }
 
}
