import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.css"],
})
export class ContactPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  submit() {
    alert("Message Send to the admin");
    this.router.navigateByUrl("/home");
  }
}
