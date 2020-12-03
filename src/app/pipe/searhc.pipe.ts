import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "search",
})
export class SeathcPipe implements PipeTransform {

    product: any;

    transform(products: Array<any>, value: string) {
        if (value == undefined || value == '') {
            return products
        } else {
            let tmp = products.filter(product => {
                return product.title.toLowerCase().includes(value.toLowerCase());
            })

            return tmp || [{}];
        }
    }
}