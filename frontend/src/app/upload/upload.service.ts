import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = `${environment.env.apiUrl}/api/v1/upload`;

@Injectable()
export class UploadService {
  constructor(private http: HttpClient) { }

  public upload(
    files: Set<File>
  ): { [key: string]: { progress: Observable<number> } } {
    const status: { [key: string]: { progress: Observable<number> } } = {};

    files.forEach(file => {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      const progress = this.send(apiUrl, formData);

      status[file.name] = {
        progress: progress.asObservable()
      };
    });

    return status;
  }

  private send(url: string, formData: FormData): Subject<number> {
    const progress = new Subject<number>();

    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true
    });

    this.http.request(req).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round((100 * event.loaded) / event.total);
        progress.next(percentDone);
      } else if (event instanceof HttpResponse) {
        progress.complete();
      }
    });
    return progress;
  }
}
