import React, { useEffect } from "react";
import { Profile } from "components/Profile/Profile";
import { ProfileType, setUserProfile } from "redux/profile-reduser";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { AppStateType } from "redux/redux-store";
import { Dispatch } from "redux";
import { withRouter } from "withrouter";
import { useParams } from "react-router-dom";

// class ProfileContainer extends React.Component<ProfileContainerProps> {
//   componentDidMount() {
//     // Получение параметров маршрута напрямую с использованием `this.props.match.params.userId`
//     const userId = this.props.match.params.userId;
//     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((res) => {
//       this.props.setUserProfileM(res.data);
//     });
//   }
//
//   render() {
//     return <Profile {...this.props} profile={this.props.profile} />;
//   }
// }

const ProfileContainer: React.FC<ProfileContainerProps> = (props) => {
  // const dispatch = useDispatch();
  const { userId } = useParams<{ userId: string }>();
  // const profile = useSelector((state: AppStateType) => state.profilePage.profile);

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((res) => {
      props.setUserProfileM(res.data);
    });
  }, [userId]);

  return <Profile profile={props.profile} />;
};

function mapStateToProps(state: AppStateType): MapStateToProps {
  return {
    profile: state.profilePage.profile,
  };
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToProps {
  return {
    setUserProfileM: (profile: ProfileType) => {
      dispatch(setUserProfile(profile));
    },
  };
}

// const WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));

// Типы
export type ProfileContainerProps = MapStateToProps & MapDispatchToProps;

type MapStateToProps = {
  profile: ProfileType;
};
type MapDispatchToProps = {
  setUserProfileM: (profile: ProfileType) => void;
};
