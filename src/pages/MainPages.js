import React, { useEffect, useState } from "react";
import { Container, Input, Row } from "reactstrap";
import EroCards from "../components/EroCards";
import { getErosData } from "../helper/actions";

function MainPages(props) {
  const [eroList, setEroList] = useState([]);

  useEffect(() => {
    getErosData().then((response) => setEroList(response.data));
  }, []);

  return (
    <Container className="py-3">
      <Row>
        {eroList.map((ero) => (
          <div className="col-6 col-md-3 mb-3">
            <EroCards data={ero} />
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default MainPages;