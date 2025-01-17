import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, Button } from '@material-ui/core';

import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar6 from '../../assets/images/avatars/avatar6.jpg';

import people1 from '../../assets/images/stock-photos/stock-2.jpg';
import people3 from '../../assets/images/stock-photos/stock-1.jpg';

import PerfectScrollbar from 'react-perfect-scrollbar';

const HeaderDots = () => {
  const [anchorEl1, setAnchorEl1] = useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const open1 = Boolean(anchorEl1);

  return (
    <>
      <div className="d-flex align-items-center popover-header-wrapper">
        <span className="d-inline-block pr-3">
          <Button
            onClick={handleClick1}
            className="btn-warning font-size-lg p-0 d-inline-block shadow-none border-0 text-center d-44 rounded-sm position-relative">
            <span>
              <div className="badge badge-danger pulse-animation badge-circle">
                New notifications
              </div>
              <NotificationsActiveTwoToneIcon />
            </span>
          </Button>
          <Popover
            open={open1}
            anchorEl={anchorEl1}
            onClose={handleClose1}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
            classes={{
              paper: 'app-header-dots'
            }}>
            <div className="popover-custom-wrapper popover-custom-md">
              <div className="py-3 text-center">
                <div className="font-weight-bold font-size-lg mb-0 text-black">
                  Recent Activity
                </div>
                <p className="text-black-50 mb-0">
                  This is what happened since you last logged in!
                </p>
              </div>
              <div className="scroll-area scroll-area-sm shadow-overflow">
                <PerfectScrollbar
                  options={{
                    wheelPropagation: false
                  }}>
                  <div className="px-4">
                    <div className="timeline-list timeline-list-offset timeline-list-offset-dot py-3">
                      <div className="timeline-item">
                        <div className="timeline-item-offset">12 Feb</div>
                        <div className="timeline-item--content">
                          <div className="timeline-item--icon" />
                          <h4 className="timeline-item--label mb-2 font-weight-bold">
                            <div className="badge badge-success">
                              sell/market
                            </div>
                          </h4>
                          <p>
                            You sold <b>12 ETH</b> for <b>3478 USD</b>.
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-item-offset">11 Feb</div>
                        <div className="timeline-item--content">
                          <div className="timeline-item--icon" />
                          <h4 className="timeline-item--label mb-2 font-weight-bold">
                            Invite code sent
                          </h4>
                          <p>Your friends joined the platform.</p>
                          <div className="avatar-wrapper-overlap mt-2 mb-1">
                            <div className="avatar-icon-wrapper avatar-icon-sm">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar1} />
                              </div>
                            </div>
                            <div className="avatar-icon-wrapper avatar-icon-sm">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="avatar-icon-wrapper avatar-icon-sm">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar6} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-item-offset">9 Feb</div>
                        <div className="timeline-item--content">
                          <div className="timeline-item--icon" />
                          <h4 className="timeline-item--label mb-2 font-weight-bold">
                            Uploaded documents
                          </h4>
                          <p>
                            You uploaded the following documents onto the crypto
                            platform:
                          </p>
                          <div className="mt-3">
                            <a href="#/" onClick={(e) => e.preventDefault()}>
                              <img
                                alt="..."
                                className="img-fluid rounded mr-3 shadow-sm"
                                src={people1}
                                width="70"
                              />
                            </a>
                            <a href="#/" onClick={(e) => e.preventDefault()}>
                              <img
                                alt="..."
                                className="img-fluid rounded shadow-sm"
                                src={people3}
                                width="70"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-item-offset">9 Feb</div>
                        <div className="timeline-item--content">
                          <div className="timeline-item--icon" />
                          <h4 className="timeline-item--label mb-2 font-weight-bold">
                            Profile verification
                          </h4>
                          <p>You partially submitted the required documents.</p>
                          <div className="mt-2">
                            <Button size="small" className="btn-warning">
                              Submit remaining docs
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-item-offset">6 Feb</div>
                        <div className="timeline-item--content">
                          <div className="timeline-item--icon" />
                          <h4 className="timeline-item--label mb-2 font-weight-bold">
                            Joined bamburgh
                          </h4>
                          <p>Welcome to the platform. Enjoy your stay here!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
              <div className="text-center py-3">
                <Button size="small" className="btn-primary px-4">
                  <span className="btn-wrapper--label">View all</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </div>
            </div>
          </Popover>
        </span>
      </div>
    </>
  );
};

export default HeaderDots;
