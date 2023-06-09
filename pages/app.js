import Layout from "@/components/layout";
import GlobalContextProvider from "@/store";
import styles from "@/styles/globals.css";

export default function App({Component, pageProps}) {
    return (
        <GlobalContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </GlobalContextProvider>
    )
}