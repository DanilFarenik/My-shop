import { Injectable } from '@angular/core';
import { iProductData } from '../app.component';


@Injectable({ providedIn: 'root' })
export class ProductsService {
    products: Array<iProductData> = this.handlerLocalStorage();

    handlerLocalStorage(): Array<iProductData> {
        let data: Array<iProductData> = [];

        for (let item in localStorage) {
            try {
                console.log("dsdssd");

                if (typeof localStorage[item] == "string") {
                    let tmp: iProductData = JSON.parse(localStorage[item]);
                    tmp["name"] = item;

                    data.push(tmp)
                }
            } catch { }
        }

        return data;
    }

    newProduct(event: iProductData) {
        let flag = true;

        this.products.forEach(item => {
            console.log(item.name, event.name);

            if (item.name == event.name) {
                flag = false;
            }
        })

        if (event && flag) this.products = [...this.products, event];
    }

    delete(event: string) {
        this.products = this.products.filter((item: any) => event != item.name)
    }
}