import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    type : new FormControl(''),
    id : new FormControl(''),
    name :  new FormControl(''),
    detail :  new FormControl(''),
    quantity : new FormControl('',[Validators.required]),
    price : new FormControl(''),
  });

  
  productType: string[] = ['','CPU','RAM','HDD','Mainboard'];

  constructor() { }

  ngOnInit(): void {
  }
  get quantity(){
    return  this.productForm.get('quantity');
  }

}
