import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { FormService } from "./form.service";
import { ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  sampleForm: FormGroup;
 
  constructor(private formService:FormService) { 
   
    this.sampleForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
   });
  }

  ngOnInit() {
  }
  loginDetails(LoginValues){    
    this.formService.LoginDetail(LoginValues).subscribe(   
      response => {
       if (response != "No data") {
        alert("TrY")
      }
       else
       {
          alert("success");
       }  
    }
  );
  }
}
