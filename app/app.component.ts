import {Component, OnInit, NgModule} from "@angular/core";
import {ModalDialogService, ModalDialogOptions, ModalDialogHost} from "nativescript-angular/modal-dialog";
import {ModalDialogParams} from "nativescript-angular/modal-dialog";
import {DatePicker} from "ui/date-picker";
import {Page} from "ui/page";


@Component({

    providers: [ModalDialogService],
    selector: "my-app",
    templateUrl:"app.component.html"
})

export class AppComponent implements OnInit {
    public result:Date;

    constructor(private _modalService: ModalDialogService) {
    }

    ngOnInit() {

    }

    createModelView() {
        var that = this;
        var options: ModalDialogOptions = {context:"",fullscreen: false};

        this._modalService.showModal(DatePickerComponent, options)
            .then((dateresult: Date) => {
                console.log("date result "+dateresult);
                that.result = dateresult;
            })
    }
}



@Component({
    selector: 'modal-content',
    template: `

    <StackLayout>
            <DatePicker id="datePicker"></DatePicker>
            <Button text="Submit" (tap)="submit()"></Button>
    </StackLayout>
    `
})
export class DatePickerComponent implements OnInit{

    constructor(private params: ModalDialogParams, private page: Page) {}

    ngOnInit(){
        let datePicker:DatePicker =<DatePicker> this.page.getViewById<DatePicker>("datePicker");
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }

    public submit() {
            let datePicker:DatePicker =<DatePicker> this.page.getViewById<DatePicker>("datePicker");
            this.params.closeCallback(datePicker.date);
    }
}