import { Attribute, GenericFunction, ReactElement } from '@kleeen/types';
import { Order, isNilOrEmpty } from '@kleeen/common/utils';

import { GridSectionHeaderProps } from '../GridSection.model';
import { Icon } from '../../Icon';
import TableCell from '@material-ui/core/TableCell';
import { TextField } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import _ from 'lodash';
import classnames from 'classnames';
import { setVirtualizedTableInputValue } from './virtual-table/virtualized-table-props.model';

const iconBySortDirection: { [key in Order]: string } = {
  [Order.asc]: 'ks-sort-asc',
  [Order.desc]: 'ks-sort-desc',
  [Order.none]: 'ks-sort-asc',
};

export type HeaderRendererProps = GridSectionHeaderProps & {
  columnIndex: number;
  newAttributes?: Attribute[];
  setInputValue?: setVirtualizedTableInputValue;
  inputValues?: string | number | Record<string, never>;
};

export const headerRenderer = ({
  attributes,
  columnIndex,
  handleChange,
  hasActions,
  inputValues,
  newAttributes,
  onSort,
  order,
  orderBy,
  setInputValue,
}: HeaderRendererProps): JSX.Element | null => {
  let debouncedFn;

  const colSpan = columnIndex === 0 && hasActions ? 2 : 0;
  const getColumnLabel = (attr: Attribute): string => attr.label || attr.name;
  const baseAttributes = newAttributes ? newAttributes : attributes;
  const attribute = baseAttributes[columnIndex];
  const classAppend = () => {
    if (columnIndex === 0) return 'firstHeader';
    if (columnIndex === baseAttributes.length - 1) return 'lastHeader';
    return 'middleHeader';
  };

  return (
    <TableCell
      key={attribute.name}
      colSpan={colSpan}
      className={classnames('header-container', classAppend())}
    >
      <div className="header-item">
        <div className="truncate-text">
          <Tooltip title={getColumnLabel(attribute)} placement="top">
            <TextField
              onChange={(e) => {
                e.persist();
                if (isNilOrEmpty(debouncedFn)) {
                  debouncedFn = _.debounce(() => {
                    const { value } = e.target;
                    handleChange(attribute.name, value);
                  }, 300);
                }
                debouncedFn();
              }}
              onInput={(e) => {
                if (isNilOrEmpty(setInputValue)) return;
                setInputValue(attribute.name, e.target['value']);
              }}
              value={inputValues ? inputValues[attribute.name] : ''}
              label={getColumnLabel(attribute)}
              disabled={isNilOrEmpty(setInputValue)}
            />
          </Tooltip>
        </div>
        <IconSort onSort={onSort} name={attribute.name} orderBy={orderBy} order={order} />
      </div>
    </TableCell>
  );
};

interface IconSortProps {
  onSort: GenericFunction;
  name: string;
  orderBy: string;
  order: Order;
}

function IconSort({ onSort, name, orderBy, order }: IconSortProps) {
  const classAppend = classnames('sort-icon', { show: orderBy === name });

  return (
    <div className={classAppend} onClick={() => onSort(name)}>
      <Icon icon={iconBySortDirection[order]} />
    </div>
  );
}
