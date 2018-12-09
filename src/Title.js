import React from 'react';
import { compose, withProps } from 'recompact';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import get from 'lodash/get';

const TitleQuery = gql`
  query Title {
    title
  }
`;

const enhance = compose(
  graphql(TitleQuery, {
    name: 'titleQueryData',
    options: () => ({
      fetchPolicy: 'cache-first',
    }),
  }),
  withProps(({ titleQueryData }) => {
    return ({
      title: get(titleQueryData, 'title'),
      loading: get(titleQueryData, 'loading'),
    });
  }),
);

const Title = ({ title, loading }) => {
  if (loading) {
    return <div>{'Loading...'}</div>;
  }
  return <div>{`Title: ${title}`}</div>
};

export default enhance(Title)