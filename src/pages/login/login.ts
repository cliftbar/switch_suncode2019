import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Storage } from "@ionic/storage";
import { UpdateStoreService } from "../../store/services/update-store"
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  address:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: HTTP,
              private storage: Storage,
              private updateStore: UpdateStoreService) {
              }

  login(){
    this.navCtrl.setRoot("HomePage", {address: this.address});
    this.storage.set("address", this.address);
    // this.updateStore.addUserData({ homeaddress: this.address });
    //TODO
    // this.http.get("https://us-central1-switch-e1a28.cloudfunctions.net/getsavings", "", "")
    //   .then(result => {
    //     console.log("resul",result);
    //     // this.updateStore.addUserData({ homeaddress: this.address });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

  }
}
