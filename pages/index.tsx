import Layout from '@/components/Layout';
import Link from '@/components/Link';
import Page from '@/components/Page';

export default function Home() {
    return (
        <Layout>
            <Page>
                <section className="flex flex-col gap-6">
                    <h2 className="text-3xl font-semibold tracking-tight">
                        CKBox integration with Next.js
                    </h2>
                </section>
                <hr className="border-t border-accents-2 my-6" />
                <section className="flex flex-col gap-3">
                    <p>Below you can find example integrations of CKBox.</p>
                    <p>
                        In a typical scenario access to CKBox will be restricted
                        to authenticated users only. Therefore, each sample is
                        restricted to signed in users only. Use different
                        credentials to unlock various CKBox roles. See available
                        users{' '}
                        <Link
                            href="https://github.com/ckbox-io/ckbox-nextjs-example/blob/main/pages/api/auth/%5B...nextauth%5D.ts"
                            target="_blank"
                            rel="noreferrer"
                        >
                            here
                        </Link>
                        .
                    </p>
                    <div className="flex-1 hidden md:flex gap-2">
                        <ol>
                            <li>
                                <Link href="/inline">Inline mode</Link>
                            </li>
                            <li>
                                <Link href="/file-picker">File picker</Link>
                            </li>
                            <li>
                                <Link href="/ckeditor">CKEditor</Link>
                            </li>
                        </ol>
                    </div>
                </section>
            </Page>
        </Layout>
    );
}
