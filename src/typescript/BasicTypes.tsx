export default function BasicTypes() {
    const name : string = 'Anderson Amangandi'
    const age : number = 34;
    const isActive : boolean = false;

    const people = ['Maria','Carlos'];
    return ( 
       <>
       <><h3> Tipos Basicos</h3></>
       {name} - {age} - { isActive ? 'Activo' :'Inactivo' } - {people.join(', ')}
       
       </>
    )
       
    
}