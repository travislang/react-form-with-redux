# React Form with Redux

This application will use React and Redux to allow a user to add items to the snack table.

## Base Requirements

- Fork and clone this repository
- Run `npm install`
- Start the client `npm run client` and `npm run server`
- Bring in `redux`, `react-redux` and `redux-logger`
- Set up your `store` and `Provider`
- Create an input form component that allows the user to add a snack (as a string) to an array. 
  - This form will `dispatch` an `action` and run a `reducer`. This reducer needs to add this new item to an array of snack items.
- Display this list of snacks on the DOM with another component called `SnackList`.

Remember to `connect` and `mapReduxStateToProps` in each component that needs access to the Redux Store! 

```
const mapReduxStateToProps = reduxState => ({reduxState});

export default connect(mapReduxStateToProps)(ComponentClassName);
```

## Note

If it helps, start with everything in the `App` component.

The long-term goal is to move things to components, but the focus here is to dispatch actions, run a reducer, and get the updated state data onto the DOM.


## Style Mode

- Bring in Material UI. Style and layout the app using it. [https://material-ui.com/getting-started/installation/](https://material-ui.com/getting-started/installation/)

## Stretch Goals

- Break the above into components for the form and the display if you have not already done so.
- Add a subcomponent for a `SnackItem` to display each snack.
- Add another input for the name of the person who provided the snack. Make sure this shows up on the DOM as well.
- Add a route for POST and GET `/snacks`. Implement axios on the front end to use the server. No database needed, just store an array on the Server.
