import { Component, EventEmitter, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'artk-create-video-game',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-video-game.component.html',
  styleUrl: './create-video-game.component.scss'
})
export class CreateVideoGameComponent {
  gameCreated = output<{ name: string; dateSortie: Date }>();
  gameForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.gameForm = this.fb.group({
      name: [''],
      dateSortie: ['']
    });
  }

  onSubmit() {
    const formValue = this.gameForm.value;
    this.gameCreated.emit({
      name: formValue.name,
      dateSortie: new Date(formValue.dateSortie)
    });
    this.gameForm.reset();
  }
}
