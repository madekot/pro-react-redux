import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) => {
  return (
    <StarshipList onItemSelected={(id) => history.push(`/starships/${id}`)} />
  );
};

export default withRouter(StarshipsPage);
