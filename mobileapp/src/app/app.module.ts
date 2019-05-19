import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MobilePay } from './app.component';
import { HTTP } from '@ionic-native/http';

import { IonicStorageModule } from "@ionic/storage";
import { AdminProvider } from '../providers/admin/admin';
import { UpdateStoreService } from "../store/services/update-store";
import { AppStoreModule } from "../store/module-startup";
import { EffectsModule } from "@ngrx/effects";
import { effects } from "../store/effects/index";
import { SafariViewController } from "@ionic-native/safari-view-controller";
const nativeProviders = [SafariViewController, HTTP];
@NgModule({
  declarations: [
    MobilePay
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MobilePay),
    IonicStorageModule.forRoot(),
    AppStoreModule,
    EffectsModule.forRoot(effects)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MobilePay
  ],
  providers: [
    nativeProviders,,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdminProvider,
    UpdateStoreService
  ]
})
export class AppModule {}
