import type { AppProps } from 'next/app';
import { primary, secondary } from 'fonts';
import 'styles/globals.css';
import ViewportProvider from 'src/contexts/viewport';
import IsDomReadyProvider from 'src/contexts/dom-ready';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IsDomReadyProvider>
      <ViewportProvider>
        {/* Make font variables avaiable to all pages. */}
        <div
          className={`${primary.variable} ${secondary.variable} font-primary`}
        >
          <Component {...pageProps} />
        </div>
      </ViewportProvider>
    </IsDomReadyProvider>
  );
}

export default MyApp;
