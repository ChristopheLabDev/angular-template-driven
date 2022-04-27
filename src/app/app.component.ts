import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  onSubmit(dataForm: any) {
    console.log(dataForm.value);
    /**
     * { firstName: "Arnold",
     *    lastName: "", 
     * }
     */
  }

  ajoutTache(taskForm: any) {
    console.log(taskForm.value);
    /**
     * { task: "Tache 1"}
     */
  }
}
