import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  getAll(){
    return this.httpClient.get("https://itsqmet.free.beeceptor.com/products")


  }
}
