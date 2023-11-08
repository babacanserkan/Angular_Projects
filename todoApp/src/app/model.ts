import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'User';
    this.items = [
      // { description: 'Kahvaltı', action: true },
      // { description: 'Ders', action: false },
      // { description: 'Öğlen Yemeği', action: false },
      // { description: 'Yüzme', action: false },
    ];
  }
}
