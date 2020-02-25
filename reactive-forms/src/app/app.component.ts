import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}
  title = "reactive-forms";
  get userName(){
    return this.registrationForm.get('userName');
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

  registrationForm = this.fb.group({
    userName: ["",[ Validators.required,Validators.minLength(3)]],
    password: [""],
    confirmPassword: [""],
    address: this.fb.group({
      city: [""],
      state: [""],
      postalCode: [""]
    })
  });

  loadApiData() {
    this.registrationForm.patchValue({
      userName: "khorshed alam",
      password: "123456",
      confirmPassword: "123456"
    });
  }
}
