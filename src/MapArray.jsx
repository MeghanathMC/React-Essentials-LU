function MapArray() {
  let iplTeams = [
    {
      captain: "faf duplesis",
      team: "RCB",
    },
    {
      captain: "Rohit Sharma",
      team: "MI",
    },
    {
      captain: "Shreyas Iyer",
      team: "KKR",
    },
    {
      captain: "Ms Dhoni",
      team: "CSK",
    },
  ];
  return (
    <div className="ipl">
      <h1>IPL Teams</h1>
      {iplTeams.map((item, index) => {
        return (
          //return jsx
          <div className="data" key={index}>
            <h3>{item.captain}</h3>
            <p>{item.team}</p>
          </div>
        );
      })}
    </div>
  );
}
export default MapArray;
