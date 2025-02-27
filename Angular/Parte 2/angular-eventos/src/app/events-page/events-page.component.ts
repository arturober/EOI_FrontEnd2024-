import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventCardComponent } from '../event-card/event-card.component';
import { EventFormComponent } from '../event-form/event-form.component';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'events-page',
  imports: [FormsModule, EventFormComponent, EventCardComponent],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css',
})
export class EventsPageComponent {
  eventos = signal<Evento[]>([
    {
      id: 1,
      title: 'Evento de prueba 1',
      description: 'Un evento para probar',
      date: '2024-12-12',
      image: '/evento1.jpg',
      price: 50,
    },
    {
      id: 2,
      title: 'Evento de prueba 2',
      description: 'Otro evento',
      date: '2025-02-01',
      image: '/evento2.jpg',
      price: 22.5,
    },
    {
      id: 3,
      title: 'Evento de prueba 3',
      description: 'Y otro más',
      date: '2025-03-15',
      image: '/evento3.jpg',
      price: 99.95,
    },
  ]);

  search = signal('');

  filteredEvents = computed(() => {
    const searchLower = this.search().toLowerCase();
    return this.eventos().filter(
      (e) =>
        e.title.toLowerCase().includes(searchLower) ||
        e.description.toLowerCase().includes(searchLower)
    );
  });

  addEvento(evento: Evento) {
    this.eventos.update(eventos => [...eventos, evento]);
  }

  deleteEvento(evento: Evento) {
    this.eventos.update(eventos => eventos.filter((e) => e !== evento));
  }

  orderPrice() {
    this.eventos.update(eventos => eventos.toSorted((e1, e2) => e1.price - e2.price));
  }

  orderDate() {
    this.eventos.update(eventos => eventos.toSorted((e1, e2) => e1.date.localeCompare(e2.date)));
  }
}
