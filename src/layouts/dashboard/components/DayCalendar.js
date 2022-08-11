import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2022-08-02';
const schedulerData = [
  { startDate: '2022-08-02T09:45', endDate: '2022-08-02T11:00', title: 'Shift 1' },
  { startDate: '2022-08-02T12:00', endDate: '2022-08-02T13:30', title: 'Shift 2' },
];

export default () => (
  <Paper>
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <DayView
        startDayHour={9}
        endDayHour={14}
      />
      <Appointments />
    </Scheduler>
  </Paper>
);