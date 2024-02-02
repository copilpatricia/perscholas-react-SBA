import Card from "react-bootstrap/Card";


function CardData({ charData }) {
  return (
    <div>
      <div className="card-components">
        {charData.map((char) => {
          return (
            <Card style={{ width: "18rem"}} key={char.id}>
              <Card.Body style={{backgroundColor: "#354f52", border: "2px solid black", borderRadius: "5px", height: "520px", }}>
                <Card.Title >{char.name}</Card.Title>
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