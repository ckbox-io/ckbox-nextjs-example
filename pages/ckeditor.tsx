import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import Layout from '@/components/Layout';
import Page from '@/components/Page';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import dynamic from 'next/dynamic';

// Use client-side rendering for CKEditor component
const CKEditor = dynamic(
    () => import('@/components/CKEditor').then((e) => e.default),
    {
        ssr: false
    }
);

export default function CKEditorPage() {
    return (
        <Layout>
            <Page>
                <section className="flex flex-col gap-6">
                    <h2 className="text-4xl font-semibold tracking-tight">
                        CKEditor
                    </h2>
                </section>
                <hr className="border-t border-accents-2 my-6" />
                <section className="flex flex-col gap-3 h-4/5">
                    In this example CKBox is integrated with CKEditor. With
                    CKBox plugin, CKEditor will upload files directly to your
                    CKBox environment. Use icon in the top-left corner of the
                    editor to open CKBox as a file picker.
                    <CKEditor />
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
