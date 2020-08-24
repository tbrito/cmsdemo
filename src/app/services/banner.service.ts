import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subscriber } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BannerService {
    constructor(private http: HttpClient) { }

    public banners: any;

    getById(id: number) : Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('x-api-subscription', environment.apiSubscription);

        var banner: any;

        this.http
            .post<any>(`${environment.apiCms}/auth/local`, 
                { identifier: "beneficioscms@wizsolucoes.com.br", password: "Q1w2e3r4" },
                { headers: headers } )
            .subscribe(resp =>
            { 
                console.log(resp.jwt);
                
                headers = new HttpHeaders();
                headers = headers
                    .set('x-api-subscription', environment.apiSubscription)
                    .set('x-api-key', resp.jwt);
        
                banner = this.http.get<any>(
                    `${environment.apiCms}/beneficios/banners/${id}`, 
                     { headers: headers });
                
                banner.subscribe(ret => {
                    console.log(ret);
                    this.banners = ret;
                })
                return this.banners;
            });

            return this.banners;
    }
}
