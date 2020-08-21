import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subscriber } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class BannerService {
    constructor(private http: HttpClient) { }

    getById(id: number): any {
        let headers = new HttpHeaders();
        headers = headers.set('x-api-subscription', environment.apiSubscription);

        var banner: any;

        var authInfo = this.http
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
        
                 this.http.get<any>(`${environment.apiCms}/beneficios/banners/${id}`, { headers: headers })
                 .subscribe(ret => {
                    banner = ret;
                    console.log(banner);
                 });
            });

            return banner;
    }
}
