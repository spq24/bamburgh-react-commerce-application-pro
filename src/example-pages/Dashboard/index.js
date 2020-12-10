import React from 'react';

import { PageTitle } from 'layout-components';

import Dashboard1 from '../../example-components/Dashboard/Dashboard1';
import Dashboard2 from '../../example-components/Dashboard/Dashboard2';
import Dashboard3 from '../../example-components/Dashboard/Dashboard3';
import Dashboard4 from '../../example-components/Dashboard/Dashboard4';
import DashboardPageTitleActions from '../../example-components/Dashboard/DashboardPageTitleActions';
export default function Dashboard() {
  return (
    <>
      <PageTitle
        titleHeading="Dashboard"
        titleDescription="Create beautiful dashboard for your commerce applications.">
        <DashboardPageTitleActions />
      </PageTitle>

      <Dashboard1 />
      <Dashboard2 />
      <Dashboard3 />
      <Dashboard4 />
    </>
  );
}
