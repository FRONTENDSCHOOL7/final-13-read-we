import React from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';

const MyLibraryChart = ({ data }) => {
  return (
    <ResponsiveCalendar
      data={data}
      from="2023-01-01"
      to="2023-12-31"
      emptyColor="#eeeeee"
      colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
      margin={{ top: 0, right: 0, bottom: 0, left: 20 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      monthLegendOffset={8}
      dayBorderWidth={1}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: 'right-to-left',
        },
      ]}
    />
  );
};

export default MyLibraryChart;
