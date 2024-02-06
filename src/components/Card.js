import Card from "react-bootstrap/Card";


function CardData({ charData }) {
  return (
    <div>
      <div className="card-components">
        {charData.map((char) => {
          return (
            <Card style={{ width: "18rem"}} key={char.id}>
              <Card.Body style={{backgroundColor: "#a69cac", border: "2px solid black", borderRadius: "5px", height: "420px", }}>
                <Card.Title id="title-card" >{char.name}</Card.Title>
                <Card.Img variant="top" src={char.image} />
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default CardData;