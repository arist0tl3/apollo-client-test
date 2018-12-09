import React from 'react';
import { mapProps, compose } from 'recompact';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const SampleMutation = gql`
  mutation Sample {
    sample
  }
`;

const Button = ({ onClick }) => (
  <button
    className="btn btn-default"
    onClick={() => onClick()}
  >
    {'Mutate and Refetch as Function'}
  </button>
)

const enhance = compose(
  graphql(SampleMutation, { name: 'sample' }),
  mapProps(({ sample }) => ({
    onClick: () => {
      sample({
        refetchQueries: () => ['Dates', 'Title'],
      });
    },
  })),
);


export default enhance(Button);
