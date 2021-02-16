import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { RotService } from "../../rot.service";
import {
  InitiateTimeHop,
  INITIATE_TIME_HOP,
  TimeHopComplete
} from "./banana.actions";

@Injectable()
export class BananaEffects {
  constructor(private actions$: Actions, private rot: RotService) {}

  @Effect()
  public initiateTimeHop$ = this.actions$.pipe(
    ofType(INITIATE_TIME_HOP),
    switchMap((action: InitiateTimeHop) =>
      this.rot.rotBanana().pipe(map(color => new TimeHopComplete(color)))
    )
  );
}
