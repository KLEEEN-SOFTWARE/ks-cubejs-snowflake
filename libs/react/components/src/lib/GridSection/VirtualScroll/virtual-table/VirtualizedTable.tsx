import { AutoSizer, InfiniteLoader, Table, defaultTableRowRenderer } from 'react-virtualized';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { configContainer } from './virtualized-table-props.model';
import { KsListingModal } from '../../../listing-modal';
import { Loader } from '../../../Loader/Loader';
import { MuiVirtualizedTableProps } from '../VirtualScroll.model';
import classnames from 'classnames';
import { getHeaderRowRenderer } from './utils';
import { styles } from '../VirtualScroll.style';
import { useVirtualizedTable } from './virtualized-table-props';
import { withStyles } from '@material-ui/core/styles';

export const bem = 'ks-virtualized-table';

const SortableTable: any = SortableContainer(Table, configContainer);
// TODO: @marimba check implementation of defaultTableRowRenderer
const SortableRow = SortableElement(defaultTableRowRenderer as any);

function MuiVirtualizedTable(props: MuiVirtualizedTableProps): any {
  const {
    _sortRow,
    classes,
    closeShowMoreModal,
    columns,
    columnsMapFunction,
    columnsState,
    getSimpleTableProps,
    getSortableTableProps,
    handleOnColumnSort,
    headerStyles,
    infiniteLoaderProps,
    isLoadingMoreRows,
    isSyncingColumns,
    listingModalSettings,
    sortable,
    sortableColumns,
    themeClass,
  } = useVirtualizedTable(props);

  if (isSyncingColumns) return <Loader />;

  return (
    <>
      <AutoSizer>
        {({ height, width }) => {
          const conditionalClasses = { [classes.tableHidden]: width === 0 };
          const tableClassName = classnames(classes.table, `${bem}--table`, conditionalClasses);
          if (sortable) {
            const columnsMap = columnsMapFunction({ width, columnsForCell: columns });
            return (
              <SortableTable
                {...getSortableTableProps({
                  width,
                  height,
                  tableClassName,
                  extraProps: {
                    onSortEnd: _sortRow,
                    rowRenderer: _rowRenderer,
                  },
                })}
              >
                {columns.map(columnsMap)}
              </SortableTable>
            );
          } else if (sortableColumns) {
            const headerRowRenderer = getHeaderRowRenderer({
              helperClass: `${themeClass} ${headerStyles['dragging-column-helper-styles']}`,
              handleOnColumnSort,
            });

            const columnsMap = columnsMapFunction({
              columnsForCell: columnsState,
              newAttributes: columnsState.map((element) => element.attr),
              width,
              withIndex: true,
              withInputValues: true,
            });

            return (
              // TODO: @marimba check implementation of loadMoreRows
              <InfiniteLoader {...infiniteLoaderProps}>
                {({ onRowsRendered, registerChild }) => (
                  <SortableTable
                    {...getSortableTableProps({
                      width,
                      height,
                      tableClassName,
                      extraProps: { onRowsRendered, ref: registerChild, headerRowRenderer },
                    })}
                  >
                    {columnsState.map(columnsMap)}
                  </SortableTable>
                )}
              </InfiniteLoader>
            );
          } else {
            const columnMap = columnsMapFunction({
              columnsForCell: columns,
              width,
              withIndex: true,
              withInputValues: true,
            });
            return (
              <InfiniteLoader {...infiniteLoaderProps}>
                {({ onRowsRendered, registerChild }) => (
                  <Table
                    {...getSimpleTableProps({ width, height, tableClassName, registerChild, onRowsRendered })}
                  >
                    {columns.map(columnMap)}
                  </Table>
                )}
              </InfiniteLoader>
            );
          }
        }}
      </AutoSizer>
      {isLoadingMoreRows && (
        <div className={classes.infiniteLoader}>
          <Loader />
        </div>
      )}
      {listingModalSettings.isOpen && (
        <KsListingModal
          attribute={listingModalSettings.attribute}
          columnLabel={listingModalSettings.columnLabel}
          data={listingModalSettings.data}
          format={listingModalSettings.format}
          isOpen={listingModalSettings.isOpen}
          onClose={closeShowMoreModal}
          rowDisplayValue={listingModalSettings.rowDisplayValue}
          widgetId={listingModalSettings.widgetId}
        />
      )}
    </>
  );
}

export const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

//#region Private Members
function _isRowSortable(index) {
  return index >= 0; // Header row should not be draggable
}

function _rowRenderer(props) {
  const { index } = props;
  return _isRowSortable(index) ? <SortableRow {...props} /> : defaultTableRowRenderer(props);
}
//#endregion
