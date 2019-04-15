import { Component, OnInit } from "@angular/core";

import { ActionSheetController } from "@ionic/angular"; // module that controls action sheets

@Component({
  selector: "app-action-sheet",
  templateUrl: "./action-sheet.page.html",
  styleUrls: ["./action-sheet.page.scss"]
})
export class ActionSheetPage implements OnInit {
  constructor(private actionSheetCntrl: ActionSheetController) {}

  ngOnInit() {}
  // async is a promise that waits until the component is created
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCntrl.create({
      header: "Albums",
      backdropDismiss: false, // backdrop prevents or not dismiss by clicking outside
      buttons: [
        {
          text: "Delete",
          role: "destructive", // makes destructive buttons red
          icon: "trash",
          cssClass: "rojo", // personalized class to make it red in android
          handler: () => {
            console.log("Delete clicked");
          }
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          }
        },
        {
          text: "Play (open modal)",
          icon: "arrow-dropright-circle",
          handler: () => {
            console.log("Play clicked");
          }
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel", // to force cancel to only work clicking on the button, backdropDismiss
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present(); // show action sheet
  }
}
