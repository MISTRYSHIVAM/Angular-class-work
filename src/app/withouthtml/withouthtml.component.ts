import { Component } from '@angular/core';

@Component({
    selector: 'app-withouthtml',
    standalone: true,
    imports: [],
    template: ` <div>copyright ......</div> `,
    styles: [
        `
            div {
                position: fixed;
                bottom: 0px;
                color: red;
                background-color: skyblue;
                width: 100vw;
                font-size: 35px;
                text-align: center;
            }
        `,
    ],
})
export class WithouthtmlComponent {}
