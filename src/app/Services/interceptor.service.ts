import { LoaderService } from './loader.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public LoaderSrv:LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
this.LoaderSrv.isLoading.next(true);
return next.handle(req).pipe
(
  finalize
  (
()=>
{
  setTimeout(() => {
      this.LoaderSrv.isLoading.next(false);
  },1000);
}
  )
)
  }

}
