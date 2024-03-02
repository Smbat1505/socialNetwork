import { connect } from "react-redux";
import { AppStateType } from "redux/redux-store";
import { Dispatch } from "redux";
import {
  Follow,
  InitialStateUsersPageType,
  SetCurrentPage,
  SetUsers,
  setUsersTotalCount,
  toggleFollowingInProgress,
  toggleIsFetching,
  UnFollow,
  UserType,
} from "redux/users-reduser";
import React from "react";
import axios from "axios";
import { UsersPr } from "components/Users/UsersPr";
import { Preloader } from "components/common/preolader/Preloader";
import { userAPI } from "components/Users/user.api";

class UsersAPI extends React.Component<UsersProps, InitialStateUsersPageType> {
  componentDidMount() {
    this.props.toggleIsFetchingM(true);
    userAPI.getUser(this.props.currentPage, this.props.pageSize).then((data) => {
      // debugger;
      this.props.toggleIsFetchingM(false);
      this.props.setUsersM(data.items);
      this.props.setTotalUsersCountM(data.totalCount);
    });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPageM(pageNumber);
    this.props.toggleIsFetchingM(true);
    userAPI.getUser(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFetchingM(false);
      this.props.setUsersM(data.items);
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
          toggleFollowingInProgressM={this.props.toggleFollowingInProgressM}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
    toggleFollowingInProgress: state.usersPage.followingInProgress,
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
    toggleIsFetchingM: (isFetching: boolean) => {
      dispatch(toggleIsFetching(isFetching));
    },
    toggleFollowingInProgressM: (isFetching: boolean, id: number) => {
      dispatch(toggleFollowingInProgress(isFetching, id));
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
  toggleFollowingInProgress: number[];
};

type MapDispatchToPropsType = {
  followM: (userId: number) => void;
  unFollowM: (userId: number) => void;
  setUsersM: (users: UserType[]) => void;
  setCurrentPageM: (pageNumber: number) => void;
  setTotalUsersCountM: (totalUsersCount: number) => void;
  toggleIsFetchingM: (isFetching: boolean) => void;
  toggleFollowingInProgressM: (isFetching: boolean, id: number) => void;
};

export type UsersProps = MapStateToPropsType & MapDispatchToPropsType;
