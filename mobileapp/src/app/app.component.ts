import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from "@ionic/storage";
import { AdminProvider } from "../providers/admin/admin";
import { UpdateStoreService } from "../store/services/update-store"

@Component({
  templateUrl: 'app.html'
})
export class MobilePay {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage, private updateStore: UpdateStoreService) {
    platform.ready().then(() => {
      statusBar.styleLightContent();
      splashScreen.hide();
      this.storage.get("mobilepayuser").then(val => {
      if (!val) {
        this.rootPage = "LoginPage";
      } else {
        this.updateStore.addUserData(val)
        this.rootPage = "HomePage";
      }
    })
    });
  }
}
