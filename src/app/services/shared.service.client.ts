import {Injectable} from '@angular/core';
@Injectable()
export class SharedService {
  user = {};

  isType(typeToCheck: string){
    for (let i = 0; i < this.user['userType'].length; i++){
      if (this.user['userType'][i] === typeToCheck){
        return true;
      }
    }
    return false;
  }
}
