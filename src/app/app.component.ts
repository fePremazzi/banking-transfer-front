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
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      originAccount: ['', Validators.required],
      destinationAccount: ['', Validators.required],
      transferValue: ['', [Validators.pattern("^[0-9]*.[0-9]*$"), Validators.min(0.01)]],
      //scheduledDate: ['', Validators.pattern("^(19|20)\d\d[/](0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])$")]
      scheduledDate: ['',[ CustomValidators.date, Validators.required]]
    });
  }
}
//2020/05/05