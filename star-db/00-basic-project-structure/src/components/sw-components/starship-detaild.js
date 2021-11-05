import React from "react";

import ItemDetails, {Record} from "../Item-details/item-details";
import withSwapiServise from "../hoc-helpers/with-swapi-servise";

const StarshipDetaild = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field={"model"} label={"Model:"} item={undefined} />
      <Record field={"length"} label={"Length:"} item={undefined} />
      <Record field={"costInCredits"} label={"Cost:"} item={undefined} />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

export default withSwapiServise(StarshipDetaild, mapMethodsToProps) 