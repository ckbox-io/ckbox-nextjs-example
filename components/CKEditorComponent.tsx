// This component can be used on client-side only
// Do not use it with SSR

import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import 'ckeditor5/ckeditor5.css';
import { Bold, ClassicEditor, Italic, Underline, CKBox, PictureEditing, Autosave, BlockQuote, CKBoxImageEdit, CloudServices, Heading, List, ImageBlock, LinkImage, ImageCaption, ImageInline, ImageInsertViaUrl, Link, ImageStyle, ImageTextAlternative, ImageUpload, ImageInsert, AutoImage, Autoformat, TextTransformation } from 'ckeditor5';
import 'ckbox/dist/styles/themes/lark.css';

// CKBox is a peer dependency of CKEditor. It must be present in the global scope.
// Importing UMD build of CKBox will make sure that `window.CKBox` will be available.
import 'ckbox/dist/ckbox';

export default function CKEditorComponent() {
    const config = {
        licenseKey: 'GPL',
        ckbox: {
            tokenUrl: `${process.env.NEXT_PUBLIC_URL}/api/ckbox`,
            theme: 'lark'
        },
        toolbar: [
            'ckbox',
            'imageUpload',
            '|',
            'heading',
            '|',
            'undo',
            'redo',
            'bold',
            'italic',
            'underline',
            '|',
            'blockQuote',
            'indent',
            'link',
            'insertImage',
            '|',
            'bulletedList',
            'numberedList'
        ],
        plugins: [
            Autoformat,
            AutoImage,
            Autosave,
            BlockQuote,
            Bold,
            CKBox,
            CKBoxImageEdit,
            CloudServices,
            Heading,
            ImageBlock,
            ImageCaption,
            ImageInline,
            ImageInsert,
            ImageInsertViaUrl,
            ImageStyle,
            ImageTextAlternative,
            ImageUpload,
            Italic,
            Link,
            LinkImage,
            List,
            PictureEditing,
            TextTransformation,
            Underline
        ],
    };

    return (
        <>
            <style>{`.ck-editor__editable_inline { min-height: 400px; }`}</style>
            <CKEditor editor={ClassicEditor} config={config} />
        </>
    );
}
