
package com.portfolio.fs.Interface;

import com.portfolio.fs.Entity.Persona;
import java.util.List;



public interface IPersonaService {
    //Lista personas
    public List<Persona> getPersona();
    
    //Guardar tipo Persona
    public  void savePersona(Persona persona);
    
    //Eliminar Persona por Id
    public void deletePersona(Long id);
    
    //Buscar persona por id
    public Persona findPersona(Long id);
    
}
