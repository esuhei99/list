import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-emp-add-edit',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatRadioModule,MatSelectModule,ReactiveFormsModule ],
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.css'
})
export class EmpAddEditComponent {
  empForm: FormGroup;
  constructor(private _fb:FormBuilder){
    this.empForm = this._fb.group({
      firstname:'',
      Lastname:'',
      Email:'',
      phone:'',
      reqister:'',
    })
  }
  onformSubmit(){
    if(this.empForm.valid) {
      console.log(this.empForm.value)
    }
  }
  
  }
   


