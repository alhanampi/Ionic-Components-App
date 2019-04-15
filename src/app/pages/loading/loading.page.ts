import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.page.html",
  styleUrls: ["./loading.page.scss"]
})
export class LoadingPage implements OnInit {
  loading: any; // cancel loading
  constructor(private loadingControl: LoadingController) {}

  ngOnInit() {
    this.presentLoading("espere por favor");
    setTimeout(() => {
      this.loading.dismiss(); // cancel
    }, 1500);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingControl.create({
      message //menssaje can be either here or in presentLoading.
      // duration: 2000, how long loading will show
    });
    return this.loading.present();
  }
}
