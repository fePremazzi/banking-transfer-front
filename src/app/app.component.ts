import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators} from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banking transfer scheduler';
  angForm: FormGroup;
  angDeleteForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.createDeleteForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      originAccount: ['', Validators.required],
      destinationAccount: ['', Validators.required],
      transferValue: ['', [Validators.pattern("^[0-9]*.[0-9]*$"), Validators.min(0.01)]],
      scheduledDate: ['',[ CustomValidators.date, Validators.required]]
    });
  }
  createDeleteForm() {
    this.angDeleteForm = this.fb.group({
      transferId: ['', [Validators.pattern("^[0-9]*$"), Validators.min(1)]]
    });
  }
}
//2020/05/05