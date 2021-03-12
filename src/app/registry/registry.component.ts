import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  @ViewChild('firstImageInput', { static: false }) firstImageInput: any;

  @ViewChild('fatherImageInput', { static: false }) fatherImageInput: any;

  @ViewChild('studentPreview', { static: false }) studentPreview: any;

  @ViewChild('fatherPreview', { static: false }) fatherPreview: any;


  options = ['KINDER Grupo A', 'KINDER grupo B', 'PRIMARIA 1º A', 'PRIMARIA 1º B', 'PRIMARIA 2º A'];

  bloodType = ['O+', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];

  fathers = ['Esteban Raúl Jimenez Ruíz', 'Maricela Ramirez Bastón', 'Maria Luisa Rojas Reyes', 'Miguel Angel Pérez Hernandez'];

  searchForParents = true;

  registryIsDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  searchParent(checked:boolean) {
    this.searchForParents = checked;
    console.log(checked);
  }

  firstImage() {
    this.firstImageInput.nativeElement.click();
  }

  fatherImage() {
    this.fatherImageInput.nativeElement.click();
  }

  selectedImageFather(srcElement: any) {
    if (srcElement.files[0] !== undefined) {
      this.fatherPreview.nativeElement.src = URL.createObjectURL(srcElement.files[0]);
    }
  }

  selectedStudentFather(srcElement: any) {
    if (srcElement.files[0] !== undefined) {
      this.studentPreview.nativeElement.src = URL.createObjectURL(srcElement.files[0]);
    }
  }

}
