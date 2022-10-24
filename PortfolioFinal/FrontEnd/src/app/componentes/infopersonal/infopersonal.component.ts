import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-infopersonal',
  templateUrl: './infopersonal.component.html',
  styleUrls: ['./infopersonal.component.css']
})
export class InfopersonalComponent implements OnInit {
  persona: persona = new persona ({ nombre: "", apellido: "", img: "" });
  
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
