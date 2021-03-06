import { EnrollmentService } from './enrollment.service';
import { User } from "./user";
import { Component } from "@angular/core";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private _enrollmentService:EnrollmentService){};
  submitted=false;
  errorMsg:'';
  title = "NgFormsTDF";
  topics = ["Angular", "Node", "React"];
  topicHasError = true;
  validateTopic(value) {
    if (value === "default") {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted=true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      data=> console.log('Success!',data),
      error=> this.errorMsg=error.statusText
    )
  }

  userModel = new User(
    "",
    "smith@test.com",
    90075556,
    "default",
    "morning",
    true
  );
}
