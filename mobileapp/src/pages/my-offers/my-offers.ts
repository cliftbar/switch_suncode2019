import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ModalController
} from "ionic-angular";
import { SafariViewController } from "@ionic-native/safari-view-controller/";

@IonicPage()
@Component({
  selector: "page-my-offers",
  templateUrl: "my-offers.html"
})
export class MyOffersPage {
  distance: number = 20;
  age: any = { lower: 18, upper: 28 };
  distancetype: string = "km";
  savingproducts: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public safariViewController: SafariViewController
  ) {
    this.savingproducts = this.navParams.get("savingproducts");
  }
  viewProduct(product) {
    this.safariViewController.isAvailable().then((available: boolean) => {
        if (available) {
          this.safariViewController
            .show({
              url: product.producturl,
              hidden: false,
              animated: false,
              transition: "curl",
              enterReaderModeIfAvailable: true,
              tintColor: "#ff0000"
            })
            .subscribe(
              (result: any) => {
                if (result.event === "opened") {
                  console.log("Opened");
                } else if (result.event === "loaded") {
                  console.log("Loaded");
                  //this.isPayedCustomer = true;
                } else if (result.event === "closed") {
                  console.log("Closed");
                }
              },
              (error: any) => console.error(error)
            );
        } else {
          console.log("not available");

          // use fallback browser, example InAppBrowser
        }
      });
  }
}
