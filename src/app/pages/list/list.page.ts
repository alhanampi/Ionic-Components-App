import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Observable } from "rxjs";
import { IonList, ToastController } from "@ionic/angular";

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"]
})
export class ListPage implements OnInit {
  @ViewChild("lista") lista: IonList;
  usuarios: Observable<any>;

  constructor(
    // service for users from data.service
    private dataService: DataService,
    private toastController: ToastController
  ) {}

  // data service info_
  ngOnInit() {
    this.usuarios = this.dataService.getUsers(); //usuarios  is what dataService returns
  }

  favorite(user) {
    this.presentToast("se guardó en favorito");
    this.lista.closeSlidingItems();
  }

  share(user) {
    this.presentToast("compartido");
    this.lista.closeSlidingItems();
  }

  delete(user) {
    this.presentToast("eliminado");
    this.lista.closeSlidingItems();
  }

  unread(user) {
    this.presentToast("marcar no leido");
    this.lista.closeSlidingItems();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
