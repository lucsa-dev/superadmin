import type { NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { authOptions } from "../api/auth/[...nextauth]";

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
                    Area restrita
                </h1>
            </main>
        </div>
    );
};

export async function getServerSideProps(context: { req: any; res: any; }) {
    const { req, res } = context;
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
            return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    //serialize session

        return {
            props: {
            session: JSON.stringify(session),
            },
        }
}

export default Home;