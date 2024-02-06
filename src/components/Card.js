import Card from "react-bootstrap/Card";

function CardData({ charData }) {
  return (
    <div>
      <div className="card-components">
        {charData.map((char) => {
          return (
            <Card style={{ width: "18rem" }} key={char.id}>
              <Card.Body
                style={{
                  backgroundColor: "#a69cac",
                  border: "2px solid black",
                  borderRadius: "5px",
                  height: "500px",
                }}
              >
                <Card.Title id="title-card">{char.name}</Card.Title>
                <Card.Img variant="top" src={char.image} />
                <Card.Text style={{fontFamily: "monospace"}}>Gender: {char.gender}</Card.Text>
                <Card.Text style={{fontFamily: "monospace"}}>Location: {char.location.name}</Card.Text>
                <Card.Text style={{fontFamily: "monospace"}}>Origin: {char.origin.name}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default CardData;
