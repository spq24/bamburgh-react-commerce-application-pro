import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Grid,
  LinearProgress,
  Card,
  Button,
  List,
  ListItem
} from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import { FlagIcon } from 'react-flag-kit';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  const [activeTab, setActiveTab] = useState('2');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <List className="d-flex nav-tabs nav-tabs-primary tabs-animated tabs-animated-shadow mb-4">
        <ListItem
          button
          selected={activeTab === '1'}
          onClick={() => {
            toggle('1');
          }}>
          <span className="font-weight-bold text-uppercase font-size-sm">
            Tabbed Listings
          </span>
        </ListItem>
        <ListItem
          button
          selected={activeTab === '2'}
          onClick={() => {
            toggle('2');
          }}>
          <span className="font-weight-bold text-uppercase font-size-sm">
            Profile Cards
          </span>
        </ListItem>
        <ListItem
          button
          selected={activeTab === '3'}
          onClick={() => {
            toggle('3');
          }}>
          <span className="font-weight-bold text-uppercase font-size-sm">
            Alternate Cards
          </span>
        </ListItem>
      </List>

      <div
        className={clsx('tab-item-wrapper overflow-hidden', {
          active: activeTab === '1'
        })}
        index={1}>
        <Card className="overflow-hidden">
          <div className="p-4">
            <div className="table-responsive-md">
              <Table className="table table-alternate-spaced mb-0">
                <thead>
                  <tr>
                    <th
                      style={{ width: '300px' }}
                      className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                      scope="col">
                      Name
                    </th>
                    <th
                      className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                      scope="col">
                      Username
                    </th>
                    <th
                      className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                      scope="col">
                      Last Active
                    </th>
                    <th
                      className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                      scope="col">
                      Email
                    </th>
                    <th
                      className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                      scope="col">
                      Total Spent
                    </th>
                    <th
                      className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                      scope="col">
                      Country
                    </th>
                    <th
                      className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                      scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper avatar-initials mr-3">
                          <div className="avatar-icon text-white bg-neutral-dark text-dark font-size-sm d-50 font-weight-bold">
                            KW
                          </div>
                        </div>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            Kristy Witt
                          </a>
                          <span className="text-black-50 d-block">
                            Customer since 2019
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>kwitt2000</span>
                    </td>
                    <td>
                      <span>09/05/2020</span>
                    </td>
                    <td>
                      <span>kwitt@example.com</span>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <small>$</small>
                      <span>2,495</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <FlagIcon code="US" size={30} />
                        <div className="pl-2 font-weight-bold">US</div>
                      </div>
                    </td>
                    <td className="text-right">
                      <Button className="btn-neutral-primary mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'search']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-neutral-first mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['far', 'edit']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-neutral-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-sm"
                        />
                      </Button>
                    </td>
                  </tr>
                  <tr className="divider"></tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper avatar-initials mr-3">
                          <div className="avatar-icon text-white bg-neutral-dark text-dark font-size-sm d-50 font-weight-bold">
                            SB
                          </div>
                        </div>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            Suman Burton
                          </a>
                          <span className="text-black-50 d-block">
                            Customer since 2020
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>sumannn</span>
                    </td>
                    <td>
                      <span>08/05/2020</span>
                    </td>
                    <td>
                      <span>sum2010@example.com</span>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <small>$</small>
                      <span>497</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <FlagIcon code="CA" size={30} />
                        <div className="pl-2 font-weight-bold">CA</div>
                      </div>
                    </td>
                    <td className="text-right">
                      <Button className="btn-neutral-primary mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'search']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-neutral-first mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['far', 'edit']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-neutral-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-sm"
                        />
                      </Button>
                    </td>
                  </tr>
                  <tr className="divider"></tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper avatar-initials mr-3">
                          <div className="avatar-icon text-white bg-neutral-dark text-dark font-size-sm d-50 font-weight-bold">
                            LW
                          </div>
                        </div>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            Lily-Ann Whyte
                          </a>
                          <span className="text-black-50 d-block">
                            Last active 3 days ago
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>LW_Ann</span>
                    </td>
                    <td>
                      <span>05/05/2020</span>
                    </td>
                    <td>
                      <span>lAnn@example.com</span>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <small>$</small>
                      <span>$699</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <FlagIcon code="BR" size={30} />
                        <div className="pl-2 font-weight-bold">BR</div>
                      </div>
                    </td>
                    <td className="text-right">
                      <Button className="btn-neutral-primary mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'search']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-neutral-first mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['far', 'edit']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-neutral-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-sm"
                        />
                      </Button>
                    </td>
                  </tr>
                  <tr className="divider"></tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper avatar-initials mr-3">
                          <div className="avatar-icon text-white bg-neutral-dark text-dark font-size-sm d-50 font-weight-bold">
                            TO
                          </div>
                        </div>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            Tara O'Brien
                          </a>
                          <span className="text-black-50 d-block">
                            Customer since Feb 2020
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>tara123</span>
                    </td>
                    <td>
                      <span>05/05/2020</span>
                    </td>
                    <td>
                      <span>tarraO@example.com</span>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <small>$</small>
                      <span>8,503</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <FlagIcon code="US" size={30} />
                        <div className="pl-2 font-weight-bold">US</div>
                      </div>
                    </td>
                    <td className="text-right">
                      <Button className="btn-neutral-primary mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'search']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-neutral-first mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['far', 'edit']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-neutral-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-sm"
                        />
                      </Button>
                    </td>
                  </tr>
                  <tr className="divider"></tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper avatar-initials mr-3">
                          <div className="avatar-icon text-white bg-neutral-dark text-dark font-size-sm d-50 font-weight-bold">
                            LB
                          </div>
                        </div>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            Lily Bouvet
                          </a>
                          <span className="text-black-50 d-block">
                            Customer since 2019
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>lb123_BOU</span>
                    </td>
                    <td>
                      <span>04/05/2020</span>
                    </td>
                    <td>
                      <span>bouLB@example.com</span>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <small>$</small>
                      <span>194</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <FlagIcon code="DE" size={30} />
                        <div className="pl-2 font-weight-bold">DE</div>
                      </div>
                    </td>
                    <td className="text-right">
                      <Button className="btn-neutral-primary mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'search']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-neutral-first mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['far', 'edit']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-neutral-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-sm"
                        />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="d-flex align-items-center justify-content-center pt-5 mb-4">
              <Pagination
                className="pagination-primary"
                count={8}
                variant="outlined"
                shape="rounded"
              />
            </div>
          </div>
        </Card>
      </div>
      <div
        className={clsx('tab-item-wrapper overflow-hidden', {
          active: activeTab === '2'
        })}
        index={2}>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className="badge badge-success">84</div>
          <span className="ml-3 font-weight-bold font-size-xxl">
            Active Memberships
          </span>
        </div>
        <div className="mb-spacing-6-x2">
          <Grid container spacing={6}>
            <Grid item xl={4}>
              <Card className="card-box p-4">
                <div className="d-flex align-items-center justify-content-between py-2">
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper d-50 mr-3 avatar-initials">
                      <div className="avatar-icon rounded-circle d-50 shadow-sm font-weight-normal text-white bg-danger">
                        TS
                      </div>
                    </div>
                    <div>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold"
                        title="...">
                        Shanelle Wynn
                      </a>
                      <span className="text-black-50 d-block">
                        UI Engineer, Apple Inc.
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="badge rounded-circle badge-neutral-success text-success d-30 btn-icon p-0 mr-1">
                      <FontAwesomeIcon icon={['fas', 'check']} />
                    </div>
                    <span className="font-size-xs text-success">
                      Profile Verified
                    </span>
                  </div>
                </div>
                <div className="divider mx-auto my-3 w-100" />
                <div className="text-center">
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'eye']} />
                    </span>
                  </Button>
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'heart']} />
                    </span>
                  </Button>
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'user']} />
                    </span>
                  </Button>
                </div>
                <div className="divider mx-auto my-3 w-100" />
                <Grid container spacing={6} className="text-center">
                  <Grid item sm={4}>
                    <div className="text-black-50">Projects</div>
                    <b className="font-size-lg">381</b>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="text-black-50">Reviews</div>
                    <b className="font-size-lg">129</b>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="text-black-50">Revenue</div>
                    <b className="font-size-lg">$691</b>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xl={4}>
              <Card className="card-box p-4">
                <div className="d-flex align-items-center justify-content-between py-2">
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper d-50 mr-3">
                      <div className="avatar-icon rounded-circle d-50 shadow-sm">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <div>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold"
                        title="...">
                        Richard Doyle
                      </a>
                      <span className="text-black-50 d-block">
                        Senior Consultant, Google
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="badge rounded-circle badge-neutral-warning text-warning d-30 btn-icon p-0 mr-1">
                      <FontAwesomeIcon icon={['far', 'clock']} />
                    </div>
                    <span className="font-size-xs text-warning">
                      Review Pending
                    </span>
                  </div>
                </div>
                <div className="divider mx-auto my-3 w-100" />
                <div className="text-center">
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'eye']} />
                    </span>
                  </Button>
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'heart']} />
                    </span>
                  </Button>
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'user']} />
                    </span>
                  </Button>
                </div>
                <div className="divider mx-auto my-3 w-100" />
                <Grid container spacing={6} className="text-center">
                  <Grid item sm={4}>
                    <div className="text-black-50">Projects</div>
                    <b className="font-size-lg">34</b>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="text-black-50">Reviews</div>
                    <b className="font-size-lg">21</b>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="text-black-50">Revenue</div>
                    <b className="font-size-lg">$283</b>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xl={4}>
              <Card className="card-box p-4">
                <div className="d-flex align-items-center justify-content-between py-2">
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper d-50 mr-3">
                      <div className="avatar-icon rounded-circle d-50 shadow-sm">
                        <img alt="..." src={avatar7} />
                      </div>
                    </div>
                    <div>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold"
                        title="...">
                        Johnny Becks
                      </a>
                      <span className="text-black-50 d-block">
                        Lead UX Designer, Spotify
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="badge rounded-circle badge-neutral-danger text-danger d-30 btn-icon p-0 mr-1">
                      <FontAwesomeIcon icon={['fas', 'times']} />
                    </div>
                    <span className="font-size-xs text-danger">Rejected</span>
                  </div>
                </div>
                <div className="divider mx-auto my-3 w-100" />
                <div className="text-center">
                  <Button
                    disabled
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'eye']} />
                    </span>
                  </Button>
                  <Button
                    disabled
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'heart']} />
                    </span>
                  </Button>
                  <Button
                    disabled
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'user']} />
                    </span>
                  </Button>
                </div>
                <div className="divider mx-auto my-3 w-100" />
                <Grid container spacing={6} className="text-center opacity-6">
                  <Grid item sm={4}>
                    <div className="text-black-50">Projects</div>
                    <b className="font-size-lg">0</b>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="text-black-50">Reviews</div>
                    <b className="font-size-lg">0</b>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="text-black-50">Revenue</div>
                    <b className="font-size-lg">$0</b>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xl={4}>
              <Card className="card-box p-4">
                <div className="d-flex align-items-center justify-content-between py-2">
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper d-50 mr-3 avatar-initials">
                      <div className="avatar-icon rounded-circle d-50 shadow-sm font-weight-normal text-white bg-danger">
                        TS
                      </div>
                    </div>
                    <div>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold"
                        title="...">
                        Shanelle Wynn
                      </a>
                      <span className="text-black-50 d-block">
                        UI Engineer, Apple Inc.
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="badge rounded-circle badge-neutral-success text-success d-30 btn-icon p-0 mr-1">
                      <FontAwesomeIcon icon={['fas', 'check']} />
                    </div>
                    <span className="font-size-xs text-success">
                      Profile Verified
                    </span>
                  </div>
                </div>
                <div className="divider mx-auto my-3 w-100" />
                <div className="text-center">
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'eye']} />
                    </span>
                  </Button>
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'heart']} />
                    </span>
                  </Button>
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'user']} />
                    </span>
                  </Button>
                </div>
                <div className="divider mx-auto my-3 w-100" />
                <Grid container spacing={6} className="text-center">
                  <Grid item sm={4}>
                    <div className="text-black-50">Projects</div>
                    <b className="font-size-lg">381</b>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="text-black-50">Reviews</div>
                    <b className="font-size-lg">129</b>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="text-black-50">Revenue</div>
                    <b className="font-size-lg">$691</b>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xl={4}>
              <Card className="card-box p-4">
                <div className="d-flex align-items-center justify-content-between py-2">
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper d-50 mr-3">
                      <div className="avatar-icon rounded-circle d-50 shadow-sm">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <div>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold"
                        title="...">
                        Richard Doyle
                      </a>
                      <span className="text-black-50 d-block">
                        Senior Consultant, Google
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="badge rounded-circle badge-neutral-warning text-warning d-30 btn-icon p-0 mr-1">
                      <FontAwesomeIcon icon={['far', 'clock']} />
                    </div>
                    <span className="font-size-xs text-warning">
                      Review Pending
                    </span>
                  </div>
                </div>
                <div className="divider mx-auto my-3 w-100" />
                <div className="text-center">
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'eye']} />
                    </span>
                  </Button>
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'heart']} />
                    </span>
                  </Button>
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'user']} />
                    </span>
                  </Button>
                </div>
                <div className="divider mx-auto my-3 w-100" />
                <Grid container spacing={6} className="text-center">
                  <Grid item sm={4}>
                    <div className="text-black-50">Projects</div>
                    <b className="font-size-lg">34</b>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="text-black-50">Reviews</div>
                    <b className="font-size-lg">21</b>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="text-black-50">Revenue</div>
                    <b className="font-size-lg">$283</b>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xl={4}>
              <Card className="card-box p-4">
                <div className="d-flex align-items-center justify-content-between py-2">
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper d-50 mr-3">
                      <div className="avatar-icon rounded-circle d-50 shadow-sm">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <div>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold"
                        title="...">
                        Richard Doyle
                      </a>
                      <span className="text-black-50 d-block">
                        Senior Consultant, Google
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="badge rounded-circle badge-neutral-warning text-warning d-30 btn-icon p-0 mr-1">
                      <FontAwesomeIcon icon={['far', 'clock']} />
                    </div>
                    <span className="font-size-xs text-warning">
                      Review Pending
                    </span>
                  </div>
                </div>
                <div className="divider mx-auto my-3 w-100" />
                <div className="text-center">
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'eye']} />
                    </span>
                  </Button>
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'heart']} />
                    </span>
                  </Button>
                  <Button
                    className="border-0 p-0 d-30 btn-icon rounded-sm mx-1 btn-transition-none btn-outline-primary"
                    variant="text">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'user']} />
                    </span>
                  </Button>
                </div>
                <div className="divider mx-auto my-3 w-100" />
                <Grid container spacing={6} className="text-center">
                  <Grid item sm={4}>
                    <div className="text-black-50">Projects</div>
                    <b className="font-size-lg">34</b>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="text-black-50">Reviews</div>
                    <b className="font-size-lg">21</b>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="text-black-50">Revenue</div>
                    <b className="font-size-lg">$283</b>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className="badge badge-danger">7</div>
          <span className="ml-3 font-weight-bold font-size-xxl text-danger">
            Overdue Memberships
          </span>
        </div>
        <Grid container spacing={6}>
          <Grid item md={4}>
            <Card className="card-border-top border-danger">
              <div className="text-center py-3">
                <div className="d-90 rounded-circle border-0 shadow-sm my-2 card-icon-wrapper bg-love-kiss btn-icon mx-auto text-center">
                  <div className="avatar-icon-wrapper d-80">
                    <div className="avatar-icon d-80 rounded-circle">
                      <img alt="..." src={avatar7} />
                    </div>
                  </div>
                </div>
                <div className="font-size-xl font-weight-bold pt-2 text-black">
                  Una Rennie
                </div>
                <div className="opacity-5 pb-3">
                  Last payment: <b>10 Feb 2020</b>
                </div>
                <div className="divider mx-auto w-50 my-3" />
                <div className="text-center">
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-discord">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'discord']} />
                    </span>
                  </Button>
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-github">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </span>
                  </Button>
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-dribbble">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'dribbble']} />
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className="card-border-top border-danger">
              <div className="text-center py-3">
                <div className="d-90 rounded-circle border-0 shadow-sm my-2 card-icon-wrapper bg-love-kiss btn-icon mx-auto text-center">
                  <div className="avatar-icon-wrapper d-80">
                    <div className="avatar-icon d-80 rounded-circle">
                      <img alt="..." src={avatar6} />
                    </div>
                  </div>
                </div>
                <div className="font-size-xl font-weight-bold pt-2 text-black">
                  Lexie Livingston
                </div>
                <div className="opacity-5 pb-3">
                  Last payment: <b>11 Feb 2020</b>
                </div>
                <div className="divider mx-auto w-50 my-3" />
                <div className="text-center">
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-discord">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'discord']} />
                    </span>
                  </Button>
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-github">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </span>
                  </Button>
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-dribbble">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'dribbble']} />
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className="card-border-top border-danger">
              <div className="text-center py-3">
                <div className="d-90 rounded-circle border-0 shadow-sm my-2 card-icon-wrapper bg-love-kiss btn-icon mx-auto text-center">
                  <div className="avatar-icon-wrapper d-80">
                    <div className="avatar-icon d-80 rounded-circle">
                      <img alt="..." src={avatar5} />
                    </div>
                  </div>
                </div>
                <div className="font-size-xl font-weight-bold pt-2 text-black">
                  Tamar O'Sullivan
                </div>
                <div className="opacity-5 pb-3">
                  Last payment: <b>12 Feb 2020</b>
                </div>
                <div className="divider mx-auto w-50 my-3" />
                <div className="text-center">
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-discord">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'discord']} />
                    </span>
                  </Button>
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-github">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </span>
                  </Button>
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-dribbble">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'dribbble']} />
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className="card-border-top border-danger">
              <div className="text-center py-3">
                <div className="d-90 rounded-circle border-0 shadow-sm my-2 card-icon-wrapper bg-love-kiss btn-icon mx-auto text-center">
                  <div className="avatar-icon-wrapper d-80">
                    <div className="avatar-icon d-80 rounded-circle">
                      <img alt="..." src={avatar4} />
                    </div>
                  </div>
                </div>
                <div className="font-size-xl font-weight-bold pt-2 text-black">
                  Zainab Hutton
                </div>
                <div className="opacity-5 pb-3">
                  Last payment: <b>13 Feb 2020</b>
                </div>
                <div className="divider mx-auto w-50 my-3" />
                <div className="text-center">
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-discord">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'discord']} />
                    </span>
                  </Button>
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-github">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </span>
                  </Button>
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-dribbble">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'dribbble']} />
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className="card-border-top border-danger">
              <div className="text-center py-3">
                <div className="d-90 rounded-circle border-0 shadow-sm my-2 card-icon-wrapper bg-love-kiss btn-icon mx-auto text-center">
                  <div className="avatar-icon-wrapper d-80">
                    <div className="avatar-icon d-80 rounded-circle">
                      <img alt="..." src={avatar3} />
                    </div>
                  </div>
                </div>
                <div className="font-size-xl font-weight-bold pt-2 text-black">
                  Katherine Moss
                </div>
                <div className="opacity-5 pb-3">
                  Last payment: <b>15 Feb 2020</b>
                </div>
                <div className="divider mx-auto w-50 my-3" />
                <div className="text-center">
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-discord">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'discord']} />
                    </span>
                  </Button>
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-github">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </span>
                  </Button>
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-dribbble">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'dribbble']} />
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className="card-border-top border-danger">
              <div className="text-center py-3">
                <div className="d-90 rounded-circle border-0 shadow-sm my-2 card-icon-wrapper bg-love-kiss btn-icon mx-auto text-center">
                  <div className="avatar-icon-wrapper d-80">
                    <div className="avatar-icon d-80 rounded-circle">
                      <img alt="..." src={avatar2} />
                    </div>
                  </div>
                </div>
                <div className="font-size-xl font-weight-bold pt-2 text-black">
                  Moshe Holt
                </div>
                <div className="opacity-5 pb-3">
                  Last payment: <b>17 Feb 2020</b>
                </div>
                <div className="divider mx-auto w-50 my-3" />
                <div className="text-center">
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-discord">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'discord']} />
                    </span>
                  </Button>
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-github">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </span>
                  </Button>
                  <Button className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm btn-dribbble">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'dribbble']} />
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div
        className={clsx('tab-item-wrapper overflow-hidden', {
          active: activeTab === '3'
        })}
        index={3}>
        <div className="mb-spacing-6-x2">
          <Grid container spacing={6}>
            <Grid item lg={6}>
              <Card className="card-box p-4">
                <div className="card-tr-actions">
                  <Button
                    variant="text"
                    className="p-0 d-30 border-0 btn-transition-none text-primary font-size-xl"
                    disableRipple>
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar-icon-wrapper rounded-circle mr-3">
                    <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                      <div className="rounded-circle overflow-hidden">
                        <img alt="..." className="img-fluid" src={avatar6} />
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold font-size-lg"
                      title="...">
                      Kate Winchester
                    </a>
                    <span className="text-black-50 d-block">
                      Freelance Designer, Mutual Inc.
                    </span>
                    <div className="d-flex align-items-center pt-1">
                      <LinearProgress
                        className="progress-xs progress-bar-rounded flex-grow-1 progress-animated-alt progress-bar-danger"
                        value={56}
                      />
                      <div className="font-weight-bold text-black-50 pl-2">
                        56%
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-black-50 font-size-md mb-0">
                  Use this individual application for a head start in building a
                  product that is related to the commerce niche. This template
                  comes with pre-built pages for orders, customers and various
                  sales releated analytics.
                </p>
                <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
                  <div className="d-flex justify-content-between">
                    <span className="font-weight-bold">Email:</span>
                    <span className="text-black-50">russotry@russo.com</span>
                  </div>
                  <div className="d-flex justify-content-between py-2">
                    <span className="font-weight-bold">Job Description:</span>
                    <span className="text-black-50">Project Manager</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="font-weight-bold">Location:</span>
                    <span className="text-black-50">San Francisco, USA</span>
                  </div>
                </div>
                <Button fullWidth className="btn-neutral-danger text-uppercase">
                  <span className="font-weight-bold">
                    View Complete Profile
                  </span>
                </Button>
              </Card>
            </Grid>
            <Grid item lg={6}>
              <Card className="card-box p-4">
                <div className="card-tr-actions">
                  <Button
                    variant="text"
                    className="p-0 d-30 border-0 btn-transition-none text-primary font-size-xl"
                    disableRipple>
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar-icon-wrapper rounded-circle mr-3">
                    <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                      <div className="rounded-circle overflow-hidden">
                        <img alt="..." className="img-fluid" src={avatar2} />
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold font-size-lg"
                      title="...">
                      Matteo Mcphee
                    </a>
                    <span className="text-black-50 d-block">
                      Frontend Developer, Stripe Inc.
                    </span>
                    <div className="d-flex align-items-center pt-1">
                      <LinearProgress
                        className="progress-bar-animated-alt progress-xs flex-grow-1 progress-bar-rounded progress-bar-first"
                        value={31}
                      />
                      <div className="font-weight-bold text-black-50 pl-2">
                        31%
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-black-50 font-size-md mb-0">
                  Use this individual application for a head start in building a
                  product that is related to the commerce niche. This template
                  comes with pre-built pages for orders, customers and various
                  sales releated analytics.
                </p>
                <div className="font-size-sm p-3 my-4 bg-light rounded-sm">
                  <div className="d-flex justify-content-between">
                    <span className="font-weight-bold">Email:</span>
                    <span className="text-black-50">matteo@mophee.com</span>
                  </div>
                  <div className="d-flex justify-content-between py-2">
                    <span className="font-weight-bold">Job Description:</span>
                    <span className="text-black-50">Frontend Developer</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="font-weight-bold">Location:</span>
                    <span className="text-black-50">London, UK</span>
                  </div>
                </div>
                <Button fullWidth className="btn-neutral-first text-uppercase">
                  <span className="font-weight-bold">
                    View Complete Profile
                  </span>
                </Button>
              </Card>
            </Grid>

            <Grid item lg={6}>
              <Card className="card-box p-4">
                <div className="card-tr-actions">
                  <Button
                    variant="text"
                    className="p-0 d-30 border-0 btn-transition-none text-primary font-size-xl"
                    disableRipple>
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="avatar-icon-wrapper rounded-circle mr-3"
                    title="Online">
                    <div className="badge badge-success badge-position badge-position--bottom-center badge-circle">
                      Online
                    </div>
                    <div className="rounded-circle overflow-hidden d-100 bg-neutral-danger font-size-lg text-center font-weight-bold text-danger d-flex justify-content-center flex-column">
                      <span>KA</span>
                    </div>
                  </div>
                  <div className="w-100">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold font-size-lg"
                      title="...">
                      Kris Alexander
                    </a>
                    <span className="text-black-50 d-block">
                      Project Manager, Apple Inc.
                    </span>
                    <div className="d-flex align-items-center pt-1">
                      <LinearProgress
                        className="progress-bar-animated-alt progress-xs flex-grow-1 progress-bar-rounded progress-bar-warning"
                        value={42}
                      />
                      <div className="font-weight-bold text-black-50 pl-2">
                        42%
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-black-50 font-size-md mb-0">
                  Use this individual application for a head start in building a
                  product that is related to the commerce niche. This template
                  comes with pre-built pages for orders, customers and various
                  sales releated analytics.
                </p>
                <div className="divider mt-4" />
                <div className="font-size-sm py-3 rounded-sm">
                  <div className="d-flex justify-content-between">
                    <span className="font-weight-bold">Email:</span>
                    <span className="text-black-50">krisa@example.com</span>
                  </div>
                  <div className="d-flex justify-content-between py-2">
                    <span className="font-weight-bold">Job Description:</span>
                    <span className="text-black-50">Project Manager</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="font-weight-bold">Location:</span>
                    <span className="text-black-50">Montreal, CA</span>
                  </div>
                </div>
                <div className="divider mb-4" />
                <Button
                  fullWidth
                  className="text-uppercase btn-neutral-warning">
                  <span className="font-weight-bold">
                    View Complete Profile
                  </span>
                </Button>
              </Card>
            </Grid>
            <Grid item lg={6}>
              <Card className="card-box p-4">
                <div className="card-tr-actions">
                  <Button
                    variant="text"
                    className="p-0 d-30 border-0 btn-transition-none text-primary font-size-xl"
                    disableRipple>
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="avatar-icon-wrapper rounded-circle mr-3"
                    title="Online">
                    <div className="badge badge-success badge-position badge-position--bottom-left badge-circle">
                      Online
                    </div>
                    <div className="rounded overflow-hidden d-100 bg-neutral-second font-size-lg text-center font-weight-bold text-second d-flex justify-content-center flex-column">
                      <span>SS</span>
                    </div>
                  </div>
                  <div className="w-100">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold font-size-lg"
                      title="...">
                      Stevie Sharp
                    </a>
                    <span className="text-black-50 d-block">UX Developer</span>
                    <div className="d-flex align-items-center pt-1">
                      <LinearProgress
                        className="progress-bar-animated-alt progress-xs flex-grow-1 progress-bar-rounded progress-bar-success"
                        value={74}
                      />
                      <div className="font-weight-bold text-black-50 pl-2">
                        42%
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-black-50 font-size-md mb-0">
                  Use this individual application for a head start in building a
                  product that is related to the commerce niche. This template
                  comes with pre-built pages for orders, customers and various
                  sales releated analytics.
                </p>
                <div className="divider mt-4" />
                <div className="font-size-sm py-3 rounded-sm">
                  <div className="d-flex justify-content-between">
                    <span className="font-weight-bold">Email:</span>
                    <span className="text-black-50">jenna@example.com</span>
                  </div>
                  <div className="d-flex justify-content-between py-2">
                    <span className="font-weight-bold">Job Description:</span>
                    <span className="text-black-50">UX Developer</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="font-weight-bold">Location:</span>
                    <span className="text-black-50">Berlin, DE</span>
                  </div>
                </div>
                <div className="divider mb-4" />
                <Button
                  fullWidth
                  className="btn-neutral-success text-uppercase">
                  <span className="font-weight-bold">
                    View Complete Profile
                  </span>
                </Button>
              </Card>
            </Grid>
          </Grid>
        </div>

        <div className="d-flex bg-white rounded align-items-center justify-content-center p-4">
          <Pagination
            className="pagination-primary"
            count={8}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
    </>
  );
}
