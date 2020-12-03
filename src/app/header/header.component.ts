import { Component, HostListener } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    flag: boolean = window.innerWidth > 700;

    activeButton: number = 0;

    dynamicHeigthB: string = "";
    dynamicHeigthL: string = "";
    dynamicMarginB: string = "";
    dynamicFontSizeL: string = "";


    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        if (event.target.innerWidth > 700) {
            this.flag = true;
        } else {
            this.flag = false;
        }
    }

    @HostListener('window:scroll')
    onScroll() {
        let y = window.scrollY;

        if (y < 100) {
            this.dynamicHeigthB = `${40 - (y * 0.1)}px`;
            this.dynamicHeigthL = `${70 - (y * 0.3)}px`
            this.dynamicMarginB = `${13 - (y * 0.08)}px ${13 + (y * 0.2)}px`;
            this.dynamicFontSizeL = `${46 - (y * 0.09)}px`;

        } else {
            let y = 100;
            this.dynamicHeigthB = `30px`;
            this.dynamicHeigthL = `40px`
            this.dynamicMarginB = `5px 32px`;
            this.dynamicFontSizeL = `37px`;
        }
    }


}