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
  angFindForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.createDeleteForm();
    this.createFindForm();
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
  createFindForm() {
    this.angFindForm = this.fb.group({
      transferId: ['', [Validators.pattern("^[0-9]*$"), Validators.min(1)]]
    });
  }
  public createTransfer(): void {
    console.log("createTransfer")
  }

  public deleteById(): void {
    console.log("deleteById")
  }

  public findById(): void {
    console.log("findById")
  }

  public findAll(): void {
    console.log("findAll")
  }
}
//2020/05/05