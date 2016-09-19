import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main.component";
import { NavigationComponent } from "./navigation.component";

export const appRoutes: Routes = [
    { path: "", redirectTo: "/MainComponent", pathMatch: "full" },
    // Client Pages
    { path: "MainComponent", component: MainComponent },
    { path: "AppComponent", component: AppComponent }
];