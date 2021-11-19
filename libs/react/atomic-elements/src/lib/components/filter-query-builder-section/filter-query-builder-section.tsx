import { KsBadge, KsButtonText, KsSvgIcon } from '@kleeen/react/components';

import { FilterQuery } from '@kleeen/types';
import { FilterQueryBuilderSectionProps } from './filter-query-builder-section.model';
import { KUIConnect } from '@kleeen/core-react';
import { KsFilterQueryBuilder } from '@kleeen/react/atomic-elements';
import { Menu } from './filter-query-builder.styles';
import React from 'react';
import { useTheme } from '@kleeen/react/hooks';

function BaseFilterQueryBuilderSection({
  attributes,
  filterQuery,
  onFilter,
  translate,
}: FilterQueryBuilderSectionProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const { themeClass } = useTheme();

  const open = Boolean(anchorEl);

  function handleClose() {
    setAnchorEl(null);
  }

  function handleFilter(query: FilterQuery) {
    onFilter(query);
    handleClose();
  }

  function handleOpen(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }

  return (
    <>
      <KsButtonText onClick={handleOpen}>
        <KsBadge badgeContent={filterQuery?.rules?.length} color="secondary">
          <KsSvgIcon icon="ks-filter" size="large" />
        </KsBadge>
      </KsButtonText>
      {open && (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'bottom',
          }}
          className={themeClass}
          getContentAnchorEl={null}
          onClose={handleClose}
          open={open}
          transformOrigin={{
            horizontal: 'center',
            vertical: 'top',
          }}
        >
          <div>
            <KsFilterQueryBuilder
              attributes={attributes}
              filterQuery={filterQuery}
              onFilter={handleFilter}
              translate={translate}
            />
          </div>
        </Menu>
      )}
    </>
  );
}

export const FilterQueryBuilderSection = KUIConnect(({ translate }) => ({ translate }))(
  BaseFilterQueryBuilderSection,
);
