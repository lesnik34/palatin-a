import App from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

import '../styles/index.scss';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import wrapper from '../store/store';
import Resize from '../components/Resize';

class MyApp extends App {
  static getInitialProps = async ({Component, ctx}) => ({
      pageProps: {
          ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
  });

  render() {
      const {Component, pageProps} = this.props;

      return (
          <ParallaxProvider>
              <Resize />
              <Component {...pageProps} />
          </ParallaxProvider>
      );
  }
}

export default wrapper.withRedux(MyApp);