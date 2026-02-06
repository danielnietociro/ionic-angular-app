import { Injectable } from '@angular/core';
import { AngularFireRemoteConfig } from '@angular/fire/compat/remote-config';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteConfigService {

  constructor(private remoteConfig: AngularFireRemoteConfig) {
    this.remoteConfig.fetchAndActivate();
  }

  getFeatureFlag(key: string): Observable<boolean> {
    return from(this.remoteConfig.getBoolean(key));
  }

  getStringValue(key: string): Observable<string> {
    return from(this.remoteConfig.getString(key));
  }

  getNumberValue(key: string): Observable<number> {
    return from(this.remoteConfig.getNumber(key));
  }
}
