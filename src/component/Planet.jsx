export const Planet = () =>{
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
    return (
      <div>
         {planets.map((planet, key)=>(
          <h1>{planet.isGasPlanet && planet.name}</h1>
        ))}
      </div>
    )
  }