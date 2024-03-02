import React, { useEffect } from "react";
import { Profile } from "components/Profile/Profile";
import { ProfileType, setUserProfile } from "redux/profile-reduser";
import axios from "axios";
import { connect } from "react-redux";
import { AppStateType } from "redux/redux-store";
import { Dispatch } from "redux";
import { withRouter } from "withrouter";
import { useParams } from "react-router-dom";

const ProfileContainer: React.FC<ProfileContainerProps> = (props) => {
  const { userId } = useParams<{ userId: string }>();

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
