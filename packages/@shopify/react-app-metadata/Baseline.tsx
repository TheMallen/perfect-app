import * as React from 'react';
import {Title, Meta, Favicon} from '@shopify/react-html-next';

interface Props {
  title?: string;
  favicon?: string;
}

export default function Baseline({favicon, title}: Props) {
  const faviconMarkup = favicon ? <Favicon source={favicon} /> : null;

  const titleMarkup = title ? <Title>{title}</Title> : null;

  return (
    <>
      <Meta charSet="utf-8" />
      <Meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <Meta name="referrer" content="never" />
      {faviconMarkup}
      {titleMarkup}
    </>
  );
}
