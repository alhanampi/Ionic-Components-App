import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-popinfo",
  templateUrl: "./popinfo.component.html",
  styleUrls: ["./popinfo.component.scss"]
})
export class PopinfoComponent implements OnInit {
  // info inside the popover

  items = Array(40);

  constructor(
    // a popover controller launches this page, so it needs to be injected
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {}

  onClick(valor: number) {
    console.log("item", valor);
    this.popoverCtrl.dismiss({
      // dismiss makes it close
      item: valor // what the user selects
    });
  }
}
