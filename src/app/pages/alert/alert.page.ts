import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.page.html",
  styleUrls: ["./alert.page.scss"]
})
export class AlertPage implements OnInit {
  titulo: string;

  constructor(public alertCntrl: AlertController) {}

  async presentAlert() {
    const alert = await this.alertCntrl.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: [
        {
          text: "Cancel",
          role: "cancel", // it works clicking outside as well
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Okay",
          handler: () => {
            console.log("Confirm Okay");
          }
        }
      ]
    });

    await alert.present();
  }

  async changeName() {
    const change = await this.alertCntrl.create({
      header: "cambiar nombre",
      inputs: [
        {
          name: "cambiar",
          type: "text",
          placeholder: "cambiar nombre"
        }
      ],
      buttons: [
        {
          text: "cancel",
          role: "cancel",
          handler: () => {
            console.log("cancelado");
          }
        },
        {
          text: "ok",
          handler: data => {
            console.log("ok", data), (this.titulo = data.cambiar);
          }
        }
      ]
    });
    await change.present();
  }

  ngOnInit() {}
}
