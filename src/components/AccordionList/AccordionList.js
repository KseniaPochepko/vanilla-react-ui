import React, { useCallback, useEffect, useMemo } from 'react';

import styles from './AccordionList.module.css';
import cx from 'classnames';
import { AccordionSection } from './AccordionSection';
import { useSearchParams } from 'react-router-dom';

const sectionValues = [
  {
    title: 'Title 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ornare odio. Vestibulum porttitor in nunc eget tristique. Nam dolor nunc, hendrerit a ex a, dictum ultrices nibh. ',
  },
  {
    title: 'Title 2',
    text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vel neque erat. ',
    cta: { text: 'learn more', url: 'https://google.com' },
  },
  {
    title: 'Title 3',
    text: 'Donec eleifend diam ligula, aliquet porttitor enim imperdiet nec. Vestibulum scelerisque maximus ligula id hendrerit. Fusce pulvinar condimentum tortor, id molestie risus. Vestibulum accumsan interdum metus et ultrices. Aliquam augue dolor, dapibus eu varius at, blandit eu nunc.',
  },
  {
    title: 'Title 4',
    text: 'Sed fermentum purus vitae lacinia euismod. Proin imperdiet id lectus sed ornare. Cras ut leo aliquet, feugiat nulla in, vehicula neque. Vestibulum at lacus cursus, commodo nisi vitae, auctor lacus. Sed nec dignissim diam. Praesent vel venenatis metus.',
  },
  {
    title: 'Title 5',
    text: 'Phasellus cursus, purus ut fermentum placerat, nibh lorem dapibus mi, nec lobortis dolor dolor eget lacus.',
  },
];

export function AccordionList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const expanded = useMemo(() => {
    const expandParam = searchParams.get('expanded');
    return !expandParam || isNaN(+expandParam) ? null : +expandParam;
  }, [searchParams]);

  useEffect(() => {
    const expandParam = searchParams.get('expanded');
    if (expandParam && isNaN(+expandParam)) {
      searchParams.delete('expanded');
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const changeExpandedItem = useCallback(
    (i) => {
      // setExpanded((prev) => (i === prev ? null : i));
      setSearchParams((prev) => {
        if (expanded === i) prev.delete('expanded');
        else prev.set('expanded', i);
        return prev;
      });
    },
    [expanded, setSearchParams]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const next = expanded !== null ? expanded + 1 : 0;
      changeExpandedItem(next % sectionValues.length);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [expanded, changeExpandedItem]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //
  //   }, 5000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className={styles.wrap}>
      <div className={cx('title', styles.heading)}>Accordion List</div>
      {sectionValues.map((value, i) => (
        <AccordionSection
          value={value}
          title={value.title}
          key={i}
          collapsed={i !== expanded}
          onChangeCollapse={changeExpandedItem.bind(null, i)}
        />
      ))}
    </div>
  );
}
