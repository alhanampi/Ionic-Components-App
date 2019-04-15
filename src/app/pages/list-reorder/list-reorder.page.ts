import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-reorder",
  templateUrl: "./list-reorder.page.html",
  styleUrls: ["./list-reorder.page.scss"]
})
export class ListReorderPage implements OnInit {
  personajes = ["sdsdsd", "vcvcvc", "kjkjkj", "ewewew", "trtrtrt"];

  constructor() {}

  ngOnInit() {}

  reorder(event) {
    console.log(event);
    const itemMov = this.personajes.splice(event.detail.from, 1)[0];
    // I remove the item with splice. It will always be in position 0
    this.personajes.splice(event.detail.to, 0, itemMov); // 0 because I'm not erasing but inserting it somewhere selse
    event.detail.complete();
  }

  onClick() {
    console.log(this.personajes); // prints new order
  }
}
