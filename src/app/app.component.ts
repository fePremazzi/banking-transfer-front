import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  _isDisabled = true;
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.createDeleteForm();
    this.createFindForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      transferId: [{ value: 0, disabled: this._isDisabled }, [Validators.pattern("^[0-9]*$"), Validators.min(0)]],
      originAccount: ['', Validators.required],
      destinationAccount: ['', Validators.required],
      transferValue: ['', [Validators.pattern("^[0-9]*.[0-9]*$"), Validators.min(0.01)]],
      scheduledDate: ['', [CustomValidators.date, Validators.required]]
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

  isDisabled() {
    if (this._isDisabled) {
      this.angForm.controls['transferId'].enable();
      this._isDisabled = false;
    } else {
      this.angForm.controls['transferId'].disable();
      this.angForm.controls['transferId'].setValue(0);
      this._isDisabled = true;
    }
  }

}
//2020/05/05