import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  message : string='';

  constructor() { }

  setmessage(data: string)
  {
this.message = data;
  }
  getmessage()
  {
    return this.message
  }
}
