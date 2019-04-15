import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progressbar",
  templateUrl: "./progressbar.page.html",
  styleUrls: ["./progressbar.page.scss"]
})
export class ProgressbarPage implements OnInit {
  porcentaje = 0.3;

  constructor() {}

  ngOnInit() {}

  cambioRango(event) {
    console.log(event);
    this.porcentaje = event.detail.value / 100; // percentage for the event
  }
}
