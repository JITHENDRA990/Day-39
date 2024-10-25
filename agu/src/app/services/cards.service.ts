import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../models/cards';

@Injectable({
  // private baseUrl: "https://sheetdb.io/api/v1/13ufcqab8ks1";
})
export class CardsService {
  private baseurl="https://sheetdb.io/api/v1/13ufcqab8ks1";

  constructor(private Http:HttpClient) {}
  public insertion():Observable<[Cards]>{
    return this.Http.get<[Cards]>(`${this.baseUrl}`);
  }
}
