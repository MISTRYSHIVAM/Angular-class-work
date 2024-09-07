import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WithouthtmlComponent } from './withouthtml/withouthtml.component';
import { AdminComponent } from './admin/admin.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, WithouthtmlComponent, AdminComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'Master Of Computer Application';

    getData(info: string) {
        alert(info);
    }

    getValidate(pass: string, cpass: string) {
        if (pass != cpass) {
            alert('not same');
        } else {
            alert('successful');
        }
    }

    changeColor(color: string, btn: HTMLDivElement) {
        console.log(btn);
        btn.style.backgroundColor = color;
        switch (color) {
            case 'red':
                // alert('red color');
                break;
            case 'green':
                // alert('green color');
                break;
            case 'blue':
                // alert('blue color');
                break;

            default:
            // alert('invalid choice');
        }
    }
    // 0 1 1 2 3 5 8 13 .....
    fibonachi(a: number, b: number, div: HTMLElement) {
        // alert('call');
        if (a + b == 34) {
            return;
        }
        let c = a + b;
        div.innerText += `${c} `;
        this.fibonachi(b, c, div);
    }
}
