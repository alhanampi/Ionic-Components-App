import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Componente } from "../interfaces/interfaces";

// rxjs delay for the skeleton text
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  //menu
  getMenuOptions() {
    return this.http.get<Componente[]>("/assets/data/menu.json");
  }

  //psearchBar:
  getAlbums() {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/albums");
  }

  //segment:
  getHeroes() {
    return this.http.get("assets/data/superheroes.json").pipe(
      delay(1500) // rjxs pipes. That's the delay that will apply
    );
  }
}
