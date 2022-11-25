import type { NextPage } from "next";
import Head from "next/head";
import BtnLogin from "../components/btnlogin";
import styles from "../styles/Home.module.css";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from './api/auth/[...nextauth]'

const Home: NextPage = () => {
        return (
        <div className={styles.container}>
            <Head>
                <title>Auth</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Nextjs + NestJs + Keycloak
                </h1>
                <BtnLogin />
            </main>
        </div>
    );
};

export async function getServerSideProps(context: { req: any; res: any; }) {
    const { req, res } = context;
    const session = await unstable_getServerSession(req, res, authOptions);

    if (session) {
            return {
            redirect: {
                destination: '/panel',
                permanent: false,
            },
        }
    }
    
        return {
            props: {
            },
        }
}

export default Home;
