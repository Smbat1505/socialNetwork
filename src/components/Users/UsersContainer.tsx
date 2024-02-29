import { connect } from "react-redux";
import { AppStateType } from "redux/redux-store";
import { Dispatch } from "redux";
import {
  Follow,
  InitialStateUsersPageType,
  SetCurrentPage,
  SetUsers,
  setUsersTotalCount,
  toggleIsFetching,
  UnFollow,
  UserType,
} from "redux/users-reduser";
import React from "react";
import axios from "axios";
import { UsersPr } from "components/Users/UsersPr";
import { Preloader } from "components/common/preolader/Preloader";

class UsersAPI extends React.Component<UsersProps, InitialStateUsersPageType> {
  componentDidMount() {
    this.props.toggleIsFetchingM(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        this.props.toggleIsFetchingM(false);
        this.props.setUsersM(res.data.items);
        this.props.setTotalUsersCountM(res.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPageM(pageNumber);
    this.props.toggleIsFetchingM(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        this.props.toggleIsFetchingM(false);
        this.props.setUsersM(res.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <UsersPr
          users={this.props.users}
          totalUserCounter={this.props.totalUserCounter}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          followM={this.props.followM}
          unFollowM={this.props.unFollowM}
          setCurrentPageM={this.props.setCurrentPageM}
          setTotalUsersCountM={this.props.setTotalUsersCountM}
          setUsersM={this.props.setUsersM}
          isFetching
          toggleIsFetchingM={this.props.toggleIsFetchingM}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCounter: state.usersPage.totalUsersCounter,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
  return {
    followM: (userId: number) => {
      dispatch(Follow(userId));
    },
    unFollowM: (userId: number) => {
      dispatch(UnFollow(userId));
    },
    setUsersM: (users: UserType[]) => {
      dispatch(SetUsers(users));
    },
    setCurrentPageM: (pageNumber: number) => {
      dispatch(SetCurrentPage(pageNumber));
    },
    setTotalUsersCountM: (totalUsersCount: number) => {
      dispatch(setUsersTotalCount(totalUsersCount));
    },
    toggleIsFetchingM: (isFetching) => {
      dispatch(toggleIsFetching(isFetching));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  totalUserCounter: number;
  currentPage: number;
  isFetching: boolean;
};

type MapDispatchToPropsType = {
  followM: (userId: number) => void;
  unFollowM: (userId: number) => void;
  setUsersM: (users: UserType[]) => void;
  setCurrentPageM: (pageNumber: number) => void;
  setTotalUsersCountM: (totalUsersCount: number) => void;
  toggleIsFetchingM: (isFetching: boolean) => void;
};

export type UsersProps = MapStateToPropsType & MapDispatchToPropsType;
