import React from 'react';
import { compose, withProps } from 'recompact';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import get from 'lodash/get';

const DatesQuery = gql`
  query Dates {
    dates {
      dateOne
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
      dateOne: get(datesQueryData, 'dates.dateOne'),
      loading: get(datesQueryData, 'loading'),
    });
  }),
);

const DateOne = ({ dateOne, loading }) => {
  if (loading) {
    return <div>{'Loading...'}</div>;
  }
  return <div>{`Date One: ${dateOne}`}</div>
};

export default enhance(DateOne)