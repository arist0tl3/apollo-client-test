## The Issue

There are 3 queries total.

Two of the queries have the same name `Dates` , but fetch different data. When refetchQueries is passed in as an array `refetchQueries: ['Dates']`, only one of the queries is refetched. When refetchQueries is passed in as a function `refetchQueries: () => ['Dates']`, both of the queries are refetched.

The third query `Title` allows you to toggle the visibility. When the query is visible, both patterns refetch the query properly. However, when the query is not visible (the component unmounts), then refetching using the function pattern leaves the query in the stale state in which it was unwatched. Refetching using the array pattern will result in updated data when the query is re-watched.

## Running

### Server

```
cd server
yarn
node index.js
```

### Client

```
yarn
yarn start
```
