import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class RotService {
  rotBanana(): Observable<any> {
    console.log("ROT BANANA");
    const miliseconds = 10000; // 10secs
    return Observable.create(observer => {
      setTimeout(() => {
        console.log("Done waiting");
        observer.next("brown");
        observer.complete();
      }, miliseconds);
    });
  }
}
