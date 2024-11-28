interface Persona {
  age?: number;
  firsname: string;
  lastname: string;
  address: Address;
}

interface Address {
  country: string;
  house: number;
}

export default function ObjectLiterals() {
  const person: Persona = {
    age: 34,
    firsname: "Anderson",
    lastname: "Amangandi",
    address: {
      country: "Ecuador",
      house: 123,
    },
  };

  return (
    <>
      <h3>Objectos</h3>
      {JSON.stringify(person, null, 2)}
    </>
  );
}
