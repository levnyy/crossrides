import Layout from "@/components/layout";
import styles from "@/styles/global.css";

export default function App({Component, pageProps}) {
    return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
    )
}