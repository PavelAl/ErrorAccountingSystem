import * as React from 'react';

import { TestingError } from 'src/common/types';
import { formatDate } from 'src/common/utils';

import { ErrorValueView } from './ErrorValueView';

import { formatPriortyToViewValue, formatSeverityToViewValue } from '../utils';

interface Props {
  error: TestingError;
}

export const ViewErrorForm = (props: Props) => {
  const { error } = props;

  return (
    <div className={'errorForm'}>
      <ErrorValueView label={'Short description'} value={error.shortDescription} />
      <ErrorValueView label={'Full description'} value={error.fullDescription} />
      <ErrorValueView label={'Priority'} value={formatPriortyToViewValue(error.priority)} />
      <ErrorValueView label={'Severity'} value={formatSeverityToViewValue(error.severity)} />
      <ErrorValueView label={'Author'} value={error.user.name} />
      <ErrorValueView label={'Date'} value={formatDate(error.date)} />
    </div>
  )
}
