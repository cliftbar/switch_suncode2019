import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app-state";
import * as _ from "lodash";
import * as moment from "moment";
import { SafariViewController } from "@ionic-native/safari-view-controller/";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  startDate: any;
  userData: any;
  utilityLink = "https://utilityapi.com/authorize/jacksonherron_gmail";
  notificationSettingsdata = {};
  accessSettings = {};
  result = {
    saving: "20.36",
    savingproducts: [
      {
        provider: "Tesla",
        product: "powerwall",
        image:
          "https://www.solarreviews.com/content/images/blog/post/tesla_powerwall_2.jpg",
        producturl: "https://www.tesla.com/powerwall"
      },
      {
        provider: "Sunpower",
        product: "sunpower battery",
        image:
          "https://stellarsolar.net/wp-content/uploads/2018/05/300.jpg?quality=100.3018052418030",
        producturl: "https://us.sunpower.com/home-solar/solar-battery-storage"
      },
      {
        provider: "Sunrun",
        product: "Sunrun storage",
        image:
          "https://news.energysage.com/wp-content/uploads/2018/03/03.19_Sunrun-Brightbox-Solar-and-Storage_Blog.png",
        producturl: "https://www.sunrun.com/solar-battery-storages"
      }
    ]
  };
  address: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: Store<AppState>,
    public safariViewController: SafariViewController,
    private storage: Storage
  ) {
    this.address = this.navParams.get("address");
    console.log("===address=", this.address);
    this.storage.set("saving", this.result);
    this.storage.get("startdate").then(val => {
      if (val) {
        this.startDate = moment(val).format("MMMM DD, YYYY");
      } else {
        this.startDate = moment().format("MMMM DD, YYYY");
         this.storage.set("startdate", this.startDate);
      }
      console.log("Your existing is", this.notificationSettingsdata);
    });
    this.storage.get("notificationsettings").then(val => {
      if (val) {
        this.notificationSettingsdata = val;
      }
      console.log("Your existing is", this.notificationSettingsdata);
    });
    this.storage.get("accesssettings").then(val => {
      if (val) {
        this.accessSettings = val;
      }
      console.log("Your access is", val);
    });
  }

  myOffers() {
    this.navCtrl.push("MyOffersPage", {
      savingproducts: this.result.savingproducts
    });
  }

  utitlityAccess(evt, type) {
    this.accessSettings[type] = evt.checked;
    this.storage.set("accesssettings", this.accessSettings);
    if (evt.checked === true) {
      this.safariViewController.isAvailable().then((available: boolean) => {
        if (available) {
          this.safariViewController
            .show({
              url: this.utilityLink,
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
    } else {
      return;
    }
  }

  solarAccess(evt, type) {
    this.accessSettings[type] = evt.checked;
    this.storage.set("accesssettings", this.accessSettings);
    if (evt.checked === true) {
      this.safariViewController.isAvailable().then((available: boolean) => {
        if (available) {
          this.safariViewController
            .show({
              url: "https://us.sunpower.com/",
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
    } else {
      return;
    }
  }

  notificationSettings(event, type) {
    this.notificationSettingsdata[type] = event.checked;
    this.storage.set("notificationsettings", this.notificationSettingsdata);
  }
}
