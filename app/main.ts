// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { NavigationComponent } from "./navigation.component";
import { AppComponent, DatePickerComponent } from "./app.component";
import {ModalDialogService, ModalDialogOptions, ModalDialogHost} from "nativescript-angular/modal-dialog";
import { Routes } from "@angular/router";
import { appRoutes } from "./app.routing";

@NgModule({
    declarations: [AppComponent, DatePickerComponent, MainComponent, NavigationComponent],
    bootstrap: [NavigationComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes)
    ],
    providers:[ModalDialogService],
    entryComponents: [DatePickerComponent]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);