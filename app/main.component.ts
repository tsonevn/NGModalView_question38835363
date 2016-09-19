import {Component} from "@angular/core";

@Component({
    selector: "main-component",
    template: `
        <Button text='TAP to Navigte' [nsRouterLink]="['/AppComponent']"></Button>
    `
})
export class MainComponent {
}