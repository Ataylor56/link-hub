import '../styles/globals.css'
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID
  const source = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`
  return (
    <>
      <Script id='GoogleAnalytics' strategy="lazyOnload" src={source} />
      <Script id='GoogleAnalytics' strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${analyticsId});
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
