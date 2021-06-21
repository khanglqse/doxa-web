import { useState } from "react";
import { Row, Col, Drawer, Button } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  ProfileContainer,
  Notification,
  NotiGroup,
} from "./styles";

const Header = ({ user }) => {
  const [visible, setVisibility] = useState(false);
  const [isShowNoti, setIsShowNoti] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const toggleNoti = () => {
      setIsShowNoti(!isShowNoti);
    };

    return (
      <>
        <CustomNavLinkSmall>
          <Link to="home">Home</Link>
        </CustomNavLinkSmall>

        <CustomNavLinkSmall style={{ width: "180px" }}>
          {!user.username ? (
            <Link to="login">
              <Button type="primary">Login</Button>
            </Link>
          ) : (
            <ProfileContainer>
              <Link to="/profile">hello {user.firstName}</Link>
              <Notification onClick={toggleNoti}>
                <span>{user.notification.length}</span>
                {isShowNoti && (
                  <NotiGroup>
                    {user.notification &&
                      user.notification.map((noti) => {
                        let percent;
                        let status;
                        percent = (noti.price - noti.oldPrice)/noti.price * 100;
                        if (percent < 0) {
                          status = 'down'
                        }
                        else {
                          status = 'up'
                        }
                        return (
                          <div>
                            {`${user.currency} has go ${status}`}
                            <span className={status}>{percent.toFixed(2)}</span>
                          </div>
                        );
                      })}
                  </NotiGroup>
                )}
              </Notification>
            </ProfileContainer>
          )}
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <div>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </div>
    </HeaderSection>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Header);
