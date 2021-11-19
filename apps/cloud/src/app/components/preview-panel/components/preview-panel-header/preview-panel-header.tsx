import { ClassNameBem, Maybe, WidgetCategory } from '@kleeen/types';
import { ItemType, KsButton, KsDropDown, KsSvgIconSize } from '@kleeen/react/components';
import React, { useEffect, useState } from 'react';
import { getIconByWidgetCategory, getWidgetCategoryByWidgetType } from '@kleeen/frontend/utils';

import { Translate } from '@kleeen/core-react';
import { Typography } from '@material-ui/core';
import classnames from 'classnames';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { usePreviewPanel } from '@kleeen/react/hooks';
import { useStyles } from './preview-panel-header.styles';

const bem = ClassNameBem.Layout;

export function PreviewPanelHeader() {
  const { previewTitle } = usePreviewPanel();
  const styles = useStyles();

  return (
    <div className={classnames(`${bem}__handle-container`, styles.previewHeader)}>
      <Typography className={styles.previewHeaderTitle}>{previewTitle}</Typography>
      <div className={styles.previewHeaderHandler}>::::::</div>
      <div className={styles.previewHeaderActionsContainer}>
        <WidgetCategoryDropdown />
        <CloseButton />
      </div>
    </div>
  );
}

//#region Private members
function resolveWidgetCategoryOption({
  widgetCategory,
}: {
  widgetCategory: WidgetCategory;
}): Maybe<ItemType> {
  const widgetCategoryResolvers: { [key in WidgetCategory]: ItemType } = {
    [WidgetCategory.Summary]: {
      disabled: false,
      icon: getIconByWidgetCategory(WidgetCategory.Summary),
      iconSize: KsSvgIconSize.Large,
      key: `ks-menu-${WidgetCategory.Summary}`,
      label: <Translate id={`app.previewLayout.widgetCategory.${WidgetCategory.Summary}`} />,
      order: 1,
    },
    [WidgetCategory.Table]: {
      disabled: false,
      icon: getIconByWidgetCategory(WidgetCategory.Table),
      iconSize: KsSvgIconSize.Large,
      key: `ks-menu-${WidgetCategory.Table}`,
      label: <Translate id={`app.previewLayout.widgetCategory.${WidgetCategory.Table}`} />,
      order: 3,
    },
    [WidgetCategory.Visualization]: {
      disabled: false,
      icon: getIconByWidgetCategory(WidgetCategory.Visualization),
      iconSize: KsSvgIconSize.Large,
      key: `ks-menu-${WidgetCategory.Visualization}`,
      label: <Translate id={`app.previewLayout.widgetCategory.${WidgetCategory.Visualization}`} />,
      order: 2,
    },
  };
  const resolver = widgetCategoryResolvers[widgetCategory];

  return resolver;
}

function WidgetCategoryDropdown() {
  const { previewWidgets, setPreviewWidgetCategory } = usePreviewPanel();
  const [selectedWidgetCategoryOption, setSelectedWidgetCategoryOption] = useState<ItemType | null>(null);
  const [widgetCategoryOptions, setWidgetCategoryOptions] = useState<ItemType[]>([]);
  const classes = useStyles();

  useEffect(() => {
    if (isNilOrEmpty(previewWidgets)) return;

    const newWidgetCategoryOptionsMap = previewWidgets.reduce(
      (acc: { [key: string]: ItemType<WidgetCategory> }, previewWidget) => {
        const widgetCategory = getWidgetCategoryByWidgetType(previewWidget.chartType);
        const newWidgetCategoryOption = resolveWidgetCategoryOption({ widgetCategory });

        if (isNilOrEmpty(newWidgetCategoryOption)) return acc;

        const isAlreadyPartOfTheOptions = acc[newWidgetCategoryOption.key];

        if (isAlreadyPartOfTheOptions) return acc;

        acc[newWidgetCategoryOption.key] = {
          ...newWidgetCategoryOption,
          handleOnClick(_: React.MouseEvent<HTMLElement, MouseEvent>, item: ItemType<WidgetCategory>) {
            setPreviewWidgetCategory(item.option);
          },
          option: widgetCategory,
        };

        return acc;
      },
      {},
    );
    const newWidgetCategoryOptions = Object.values(newWidgetCategoryOptionsMap).sort(
      (a, b) => a?.order - b?.order,
    );

    setWidgetCategoryOptions(newWidgetCategoryOptions);
  }, [setPreviewWidgetCategory, previewWidgets, previewWidgets?.length]);

  useEffect(() => {
    if (isNilOrEmpty(widgetCategoryOptions)) return;

    const [firstOption] = widgetCategoryOptions;

    setPreviewWidgetCategory(firstOption.option);
    setSelectedWidgetCategoryOption(firstOption);
  }, [setPreviewWidgetCategory, widgetCategoryOptions, widgetCategoryOptions?.length]);

  return (
    <KsDropDown
      headerSection="app.previewLayout.widgetCategory.headerSection"
      options={widgetCategoryOptions}
      placement="bottom-start"
      selectedItem={selectedWidgetCategoryOption}
      shouldHighlightSelected
      styles={{
        dropDownButton: classes.previewHeaderWidgetCategoryDropdownButton,
      }}
    />
  );
}

function CloseButton() {
  const previewContext = usePreviewPanel();
  const styles = useStyles();

  function closePreview() {
    previewContext.closePreviewPanel();
  }

  return (
    <KsButton className={styles.previewHeaderCloseButton} onClick={closePreview} variant="outlined">
      <Translate id="app.previewLayout.closeButton" type="html" />
    </KsButton>
  );
}
//#endregion
