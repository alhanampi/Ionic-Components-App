import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.page.html",
  styleUrls: ["./searchbar.page.scss"]
})
export class SearchbarPage implements OnInit {
  // test json for the exercise
  albumes: any[] = [];
  textoBuscar: ""; // for the search

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlbums().subscribe(albumes => {
      console.log(albumes);
      this.albumes = albumes;
    });
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }
}
