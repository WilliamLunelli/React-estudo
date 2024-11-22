import { peopleList } from "@/data/peopleList";

export default function Page() {

    const supervisor = peopleList.filter(person => person.profession === 'Supervisor')   

  return(
    <div>

      <h1 className="font-bold text-2xl">Olá mundo</h1>
      <h3>Algum texto</h3>

      {supervisor.length > 0 &&
        <>
          <h3>Lista de Supervisores</h3>
          <ul>
            {supervisor.map(person => 
              <li key={person.id}>{person.name}</li>
            )}
          </ul>
        </>
      }
    </div>
  );

}