import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  colorForm: FormGroup;

  @Input()
  buttonText = 'Submit Color';

  @Output()
  submitColor = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.colorForm = this.fb.group({
      color: '',
    });
  }

  doSubmitColor() {

    this.submitColor.emit(this.colorForm.value.color);

    this.colorForm.reset();
  }


}
