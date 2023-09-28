# CKBox Next.js example

This repository contains an example of a Next.js application that integrates CKBox and covers the popular usage scenarios.

The full guide describing the code of this example can be found [in the CKBox Documentation](https://ckeditor.com/docs/ckbox/latest/guides/integrations/frameworks/nextjs.html).

## Prerequisites

To run this example you will need access credentials required to connect to the CKBox service that you can obtain in the [CKEditor Ecosystem dashboard](https://dashboard.ckeditor.com/login).

## Running the application

1. Clone this repository.
2. Enter the project directory.
3. Create `.env.local` file using the `.env.example` template.
4. Add access credentials to the created `.env.local` file.

    ```
    # .env
    CKBOX_ENVIRONMENT_ID=REPLACE-WITH-ENVIRONMENT-ID
    CKBOX_ACCESS_KEY=REPLACE-WITH-ACCESS-KEY
    ```

5. Install required dependencies.

    ```bash
    npm i
    ```

6. Run the application.

    ```bash
    npm run dev
    ```

7. Open [http://localhost:3000](http://localhost:3000).

8. Sign in as a predefined user. You can find credentials in [this file](https://github.com/ckbox-io/ckbox-nextjs-example/blob/main/pages/api/auth/%5B...nextauth%5D.ts). Each user is assigned a different [CKBox role](https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#user-roles).
