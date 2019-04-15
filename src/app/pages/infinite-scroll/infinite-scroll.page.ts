import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: "app-infinite-scroll",
  templateUrl: "./infinite-scroll.page.html",
  styleUrls: ["./infinite-scroll.page.scss"]
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() {}

  ngOnInit() {}

  loadData(event) {
    console.log("cargando siguientes");
    // add data. After 1 second it adds 20 new elements.
    setTimeout(() => {
      // stops when reaching 50 elements
      if (this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true; // disable infinite scroll to prevent it from adding after reaching limit
        return;
      }

      const nuevosEl = Array(20);
      this.data.push(...nuevosEl); // push new elements to nuevosEl
      event.target.complete(); // adds every after 20 elements
    }, 1000);
  }
}
