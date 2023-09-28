import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import Page from '@/components/Page';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

// CKBox cannot be currently rendered on the server
const CKBox = dynamic(() => import('@ckbox/core').then((e) => e.CKBox), {
    ssr: false
});

// Let's import stylesheet separately, since it's not bundled with the React component
import '@ckbox/components/dist/styles/ckbox.css';

export default function Inline() {
    return (
        <Layout>
            <Page>
                <section className="flex flex-col gap-6">
                    <h2 className="text-4xl font-semibold tracking-tight">
                        Inline
                    </h2>
                </section>
                <hr className="border-t border-accents-2 my-6" />
                <section className="flex flex-col gap-3 flex-1">
                    <p>
                        To start CKBox in inline mode, you can instantiate it in
                        an arbitrary container. CKBox will respect height and
                        width of the container.
                    </p>
                    <CKBox
                        tokenUrl={`${process.env.NEXT_PUBLIC_URL}/api/ckbox`}
                    />
                </section>
            </Page>
        </Layout>
    );
}

// Access to this page allowed to signed-in users only
export const getServerSideProps: GetServerSideProps = async ({
    req,
    res,
    resolvedUrl
}) => {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${encodeURIComponent(
                    resolvedUrl
                )}`,
                permanent: false
            }
        };
    }

    return {
        props: {
            session
        }
    };
};
