import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-datetime",
  templateUrl: "./datetime.page.html",
  styleUrls: ["./datetime.page.scss"]
})
export class DatetimePage implements OnInit {
  fechaNacimiento: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() {}

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [
        {
          text: "save",
          handler: event => {
            console.log("click en save");
            console.log(event);
          }
        },
        {
          text: "log",
          handler: () => {
            console.log("click en log");
            return false; // return false prevents picker from closing
          }
        }
      ]
    };
  }

  cambioFecha(event) {
    console.log("ionChange", event);
    console.log("Date", new Date(event.detail.value));
  }
}
