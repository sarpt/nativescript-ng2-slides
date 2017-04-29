import { Component, OnInit } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    public counter: number = 16;
    public dynamicPanels: number[] = [1, 2, 3];

    ngOnInit() {
    }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }

    public changedHandler() {
        console.log('changed slide');
    }
}
