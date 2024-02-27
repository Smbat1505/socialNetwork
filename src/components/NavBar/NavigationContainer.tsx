import { InitialStateSidebarType } from "redux/sidbar-reduser";
import { connect } from "react-redux";
import { Navigation } from "./Navigation";
import { AppStateType } from "redux/redux-store";

type MapStateToPropsType = {
  friends: InitialStateSidebarType; // Adjust the type according to your Redux state
};

type MapDispatchToPropsType = {
  // If you have any actions to dispatch, define them here{
};

export type NavigationContainerProps = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    friends: state.sidebar, // Assuming that `sidebar` is the relevant part of your Redux state
  };
};

const mapDispatchToProps: MapDispatchToPropsType = {
  // Define your action creators here if needed
};

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation); // Connect the Navigation component

export default NavigationContainer;
