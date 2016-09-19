// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent, DatePickerComponent } from "./app.component";
import {ModalDialogService, ModalDialogOptions, ModalDialogHost} from "nativescript-angular/modal-dialog";

@NgModule({
    declarations: [AppComponent, DatePickerComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    providers:[ModalDialogService],
    entryComponents: [DatePickerComponent]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);