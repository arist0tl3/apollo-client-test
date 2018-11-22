import React from 'react';
import { compose, withProps } from 'recompact';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import get from 'lodash/get';

const DatesQuery = gql`
  query Dates {
    dates {
      dateTwo
    }
  }
`;

const enhance = compose(
  graphql(DatesQuery, {
    name: 'datesQueryData',
    options: () => ({
      fetchPolicy: 'cache-first',
    }),
  }),
  withProps(({ datesQueryData }) => {
    return ({
      dateTwo: get(datesQueryData, 'dates.dateTwo'),
      loading: get(datesQueryData, 'loading'),
    });
  }),
);

const DateTwo = ({ dateTwo, loading }) => {
  if (loading) {
    return <div>{'Loading...'}</div>;
  }
  return <div>{`Date Two: ${dateTwo}`}</div>
};

export default enhance(DateTwo);
