import React from 'react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { getServerSession } from 'next-auth';
import type { Asset } from '@ckbox/core';
import Layout from '@/components/Layout';
import Page from '@/components/Page';
import Button from '@/components/Button';
import Link from '@/components/Link';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

// CKBox cannot be currently rendered on the server
const CKBox = dynamic(() => import('@ckbox/core').then((e) => e.CKBox), {
    ssr: false
});

// Let's import stylesheet separately, since it's not bundled with the official React component
import '@ckbox/components/dist/styles/ckbox.css';

export default function FilePicker() {
    const [assets, setAssets] = React.useState<Asset[]>([]);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChoose = (assets: Asset[]) => {
        setOpen(false);
        setAssets(assets);
    };

    return (
        <Layout>
            <Page>
                <section className="flex flex-col gap-6">
                    <h2 className="text-4xl font-semibold tracking-tight">
                        File Picker
                    </h2>
                </section>
                <hr className="border-t border-accents-2 my-6" />
                <section className="flex flex-col gap-3">
                    One of the common scenarios is to use CKBox as a file
                    picker, where the user can choose one of the files stored in
                    the file manager. After choosing the file, we want to obtain
                    information about the chosen files, especially their URLs.
                    <div>
                        <Button onClick={handleOpen}>Choose assets</Button>
                    </div>
                    <CKBox
                        assets={{ onChoose: handleChoose }}
                        dialog={{ open, onClose: handleClose }}
                        tokenUrl={`${process.env.NEXT_PUBLIC_URL}/api/ckbox`}
                    />
                </section>
                <section className="flex flex-col gap-3">
                    <ul>
                        {assets.map(({ data }) => {
                            const name = `${data.name}.${data.extension}`;
                            const content = data.url ? (
                                <Link
                                    target="_blank"
                                    rel="noreferrer"
                                    href={data.url}
                                >
                                    {name}
                                </Link>
                            ) : (
                                name
                            );

                            return <li key={data.id}>{content}</li>;
                        })}
                    </ul>
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
