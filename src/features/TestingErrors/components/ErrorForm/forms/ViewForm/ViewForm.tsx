import * as React from 'react';

import { TestingError } from 'src/common/types';
import { formatDate } from 'src/common/utils';

import { ViewValueTemplate } from './ViewValueTemplate';

import { formatPriortyToViewValue, formatSeverityToViewValue } from '../utils';

import './ViewForm.styles.scss';
import { ErrorHistory } from '../../../ErrorHistory';

interface Props {
  error: TestingError;
}

export const ViewForm = (props: Props) => {
  const { error } = props;
  console.log(error.history);
  return (
    <div className={'errorViewForm'}>
      <h3>Error info</h3>

      <ViewValueTemplate label={'Short description'} value={error.shortDescription} />
      <ViewValueTemplate label={'Full description'} value={error.fullDescription} />
      <ViewValueTemplate label={'Priority'} value={formatPriortyToViewValue(error.priority)} />
      <ViewValueTemplate label={'Severity'} value={formatSeverityToViewValue(error.severity)} />
      <ViewValueTemplate label={'Author'} value={error.user.name} />
      <ViewValueTemplate label={'Date'} value={formatDate(error.date)} />

      <h3>Change history</h3>

      <ErrorHistory
        records={error.history}
      />
    </div>
  )
}
