import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  static configUrl: any= 'https://localhost:7169/api';;
 
  constructor() { }
  
  static getConfig() {
    return this.configUrl;
  }
}