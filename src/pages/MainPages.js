import React, { useEffect, useState } from "react";
import { Container, Input, Row } from "reactstrap";
import EroCards from "../components/EroCards";

function MainPages(props) {
  const [eroList, setEroList] = useState([]);

  useEffect(() => {
    const results = [
    {
      original_title : '20230303_180103',
      name_file : '20230303_180103.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230303_180118',
      name_file : '20230303_180118.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230303_180141',
      name_file : '20230303_180141.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230303_180210',
      name_file : '20230303_180210.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230303_180219',
      name_file : '20230303_180219.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230303_180237',
      name_file : '20230303_180237.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230303_180239',
      name_file : '20230303_180239.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230304_072003',
      name_file : '20230304_072003.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230304_085214',
      name_file : '20230304_085214.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230303_180103',
      name_file : '20230303_180103.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230304_112722',
      name_file : '20230304_112722.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230304_112728',
      name_file : '20230304_112728.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230304_112755',
      name_file : '20230304_112755.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230304_112823',
      name_file : '20230304_112823.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230304_112912',
      name_file : '20230304_112912.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230304_113719',
      name_file : '20230304_113719.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230304_113721',
      name_file : '20230304_113721.jpg',
      vote_average: 9.0
    },
    {
      original_title : '20230304_131308',
      name_file : '20230304_131308.jpg',
      vote_average: 9.0
    },
  ]
  setEroList(results);
  },[]);

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