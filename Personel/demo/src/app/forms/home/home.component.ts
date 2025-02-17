import {Component, OnInit} from '@angular/core';
import {Personel} from '../../models/personel.model';
import {TableRowSelectEvent, TableRowUnSelectEvent} from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  personelList: Personel[] = [];
  showForm: boolean = false;
  personel: Personel = new Personel();
  visible: boolean = false;

  constructor(private confirmationService: ConfirmationService) {}

  updateDialogVisible: boolean = false;
  selectedPersonel: Personel = new Personel();


  ngOnInit(): void {

  }

  showAddForm(): void {
    if (!this.showForm) { // Eğer form kapalıysa aç
      this.showForm = true;
      this.personel = new Personel(); // Yeni personel eklemek için formu sıfırla
    }
  }

  togglePanel(): void {
    if (this.showForm) {
      this.showForm = false;
    }
  }

  personelSil(personel: Personel): void {
    this.confirmationService.confirm({
      message: `${personel.name} isimli personeli silmek istediğinizden emin misiniz?`,
      header: 'Silme Onayı',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      accept: () => {

        this.personelList = this.personelList.filter(f => f.id !== personel.id);
      },
      reject: () => {
      }
    });
  }


  addPersonel(): void {
    this.personelList.push(this.personel);
    this.personel = new Personel();
    //this.showForm = !this.showForm;
    console.log(this.personelList)
  }

  selectPersonel(personel: Personel): void {
    if (this.personel === personel) {
      this.deselectPersonel();
    } else {
      this.personel = personel;
      this.visible = true; // Dialog'u göster
    }
  }

  deselectPersonel(): void {
    this.personel = new Personel();
    this.visible = false; // Dialog'u kapat
  }

  onRowSelect($event: TableRowSelectEvent) {

  }

  onRowUnselect($event: TableRowUnSelectEvent) {

  }

  protected readonly confirm = confirm;

}
