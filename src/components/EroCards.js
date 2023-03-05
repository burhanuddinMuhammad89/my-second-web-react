import React from "react";
import { Card, CardBody, CardFooter, Button } from "reactstrap";
import { Star, Heart, ChevronRight } from "react-feather";
function EroCards(props) {
    const ero = props.data;
    const image = '/images/'+ero.name_file;
    console.log(ero);
    console.log(image);
    return (
        <Card color="dark" className="h-100">
          <img
            src={process.env.PUBLIC_URL + image}
            alt={ero.original_title}
          />
          <CardBody>
            <h6 className="text-ellipsis">{ero.original_title}</h6>
            <div className="d-flex justify-content-between">
              <small className="text-warning">
                <Star size={12} alignmentBaseline="inherit" />
                {ero.vote_average}
              </small>
            </div>
          </CardBody>
          <CardFooter className="border-0 d-flex justify-content-between">
            <Button outline color="info">
              <div className="d-flex justify-content-between align-items-center gap-2">
                <Heart size={16} />
                <small>Add to Ero List</small>
              </div>
            </Button>
            <Button outline color="secondary">
              <div className="d-flex justify-content-between align-items-center gap-1">
                <ChevronRight size={16} />
              </div>
            </Button>
          </CardFooter>
        </Card>
      );
}

export default EroCards;