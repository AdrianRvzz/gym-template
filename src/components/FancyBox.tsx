import React, { useRef, useEffect, PropsWithChildren } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import type { OptionsType } from '@fancyapps/ui/types/Fancybox/options';

interface Props {
  delegate?: string;
  options?: Partial<OptionsType>;
}

function Fancybox(props: PropsWithChildren<Props>) {

  const delegate = props.delegate || '[data-fancybox]';
  
  useEffect(() => {

    const options = props.options || {};

    NativeFancybox.bind(delegate, options);

    return () => {
      NativeFancybox.destroy();
    };
  });

  return <div>{props.children}</div>;
}

export default Fancybox;
