import { Injectable } from '@angular/core';
import swal, { SweetAlertType } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  Swal = swal;
  
  toast(text: string, duration?: number, type?: SweetAlertType){
    const toastBuilder = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: duration ?? 3000
    });
    toastBuilder(text, '', type ?? 'info')
  }
}
