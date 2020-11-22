import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeDetails } from '../../shared/models/home.details.interface';
import { BaseService } from '../../shared/services/base-service.service';
import { ConfigService } from '../../shared/utils/config.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceextends extends BaseService {

  baseUrl: string = '';

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  getHomeDetails(): Observable<HomeDetails> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + "/dashboard/home", { headers })
      .pipe(map((response: HomeDetails) => {

        return response;
      }));
  }
}