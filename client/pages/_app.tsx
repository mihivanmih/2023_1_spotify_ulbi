// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
//
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {AppProps} from 'next/app';
import {wrapper} from "@/store";

const MyApp: FC<AppProps> = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
  );
};

export default MyApp