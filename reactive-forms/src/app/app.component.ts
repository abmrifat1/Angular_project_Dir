import { Component,OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormArray } from "@angular/forms";
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidation } from './shared/password.validator';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit{
  constructor(private fb: FormBuilder) {}
  title = "reactive-forms";
  
  registrationForm: FormGroup;
  get userName(){
    return this.registrationForm.get('userName');
  }
  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''))
  }
  // registrationForm = new FormGroup({
  //   userName: new FormControl("abm"),
  //   password: new FormControl(""),
  //   confirmPassword: new FormControl(""),
  //   address: new FormGroup({
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     postalCode: new FormControl("")
  //   })
  // });

  ngOnInit(){
  this.registrationForm = this.fb.group({
    userName: ["",[ Validators.required,Validators.minLength(3),forbiddenNameValidator(/admin/)]],
    email:[""],
    subscribe:[false],
    password: [""],
    confirmPassword: [""],
    address: this.fb.group({
      city: [""],
      state: [""],
      postalCode: [""]
    }),
    alternateEmails:this.fb.array([])
  },{validator:passwordValidation});

  this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue =>{
    const email=this.registrationForm.get('email');
    if(checkedValue){
      email.setValidators(Validators.required);
    }else{
      email.clearValidators();
    }
    email.updateValueAndValidity();
  })
}


  loadApiData() {
    this.registrationForm.patchValue({
      userName: "khorshed alam",
      password: "123456",
      confirmPassword: "123456",
      address:{
        city:'Dhaka',
        state:"Nodda",
        postalCode:12345,
      }
    });
  }
}
