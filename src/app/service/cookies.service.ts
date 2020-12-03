import { Injectable } from '@angular/core';

import { iData } from '../basket-form/basket-form.component';

@Injectable({ providedIn: 'root' })
export class CookieService {

    cookie: any = this.getCookieData(document.cookie.split(";").map(elem => {
        return elem.trim().split("=");
    }));

    getCookieData(cook: Array<any>): any {
        let obj: any = {}
        for (let c of cook) obj[c[0]] = c[1];
        return obj;
    }

    setCookieData(obj: iData) {
        document.cookie = `firstName=${obj.firstName ?? ''}`;
        document.cookie = `lastName=${obj.lastName ?? ''}`;
        document.cookie = `tel=${obj.tel.slice(0, 12) ?? ''}`;
        document.cookie = `email=${obj.email ?? ''}`;
    }
}