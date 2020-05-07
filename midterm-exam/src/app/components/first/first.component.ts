import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() { 
    this.profile = {
      studentid: 'B5917440',
      name: 'Nopparat Waoram',
      gender: 'Male',
      birthyear: 1997,
      email: 'arm.noparat@gmail.com',
      phone: '088-0867837',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  Year(){
    return 2020 - this.profile.birthyear ;
  }
  ShowAddress(){
    alert(this.profile.address);
  }

  ngOnInit(): void {
  }

}
