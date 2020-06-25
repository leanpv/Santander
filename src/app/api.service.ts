import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  constructor(private http: HttpClient) { }

  getDateTimeAPI() {
      return this.http.get('https://jsonmock.hackerrank.com/datetime')
      .pipe(map(this.extractData));
  }
}
