import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  getToken() {
    let token = this.get('token');
    if (token) {
      return token;
    } else {
      this.set('token', this.generateToken());
      token = this.get('token');
      return token;
    }
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
      return localStorage.getItem(key);
  }

  remove(key: string) {
      localStorage.removeItem(key);
  }

  private generateToken() { 
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) { 
        const r = Math.random() * 16 | 0,  
            v = c == 'x' ? r : (r & 0x3 | 0x8); 
        return v.toString(16); 
    }); 
}

}
