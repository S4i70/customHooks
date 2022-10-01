import { useState } from "react";

export const useForm = ( initialState={} ) => {
        //valos inicial del formulario, para manejar el cambio
    
    const [formState, setFormState] = useState(initialState);

    const onChange= ({target})=> { //desestructuracion del formState.
        const { name, value }= target; //tomando los valos de la desestructuración.
        setFormState({
            ...formState, //spret, para tomar solo los valores que necesito.
            [name]: value, //porpiedades computadas de los objetos
        });
    }
    const onResetForm=()=>{
        setFormState(initialState)

    }

    return {
        ...formState,
        formState, //exponiendo a la aplicacion
        onChange,
        onResetForm,
  }
}
