import { Component, OnInit } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    public counter: number = 16;
    public dynPanels = [1, 2, 3];

    constructor() {
    }
    ngOnInit() {
        setTimeout(() => this.dynPanels.push(1), 2000);
        setTimeout(() => this.dynPanels.push(1), 4000);
        setTimeout(() => this.dynPanels.push(1), 8000);
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

    public changedSlide(event) {
        console.log(event.oldIndex + '->' + event.newIndex);
    }
}
