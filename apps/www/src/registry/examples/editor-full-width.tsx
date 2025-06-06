'use client';

import { Plate } from '@udecode/plate/react';

import { editorPlugins } from '@/registry/components/editor/plugins/editor-plugins';
import { useCreateEditor } from '@/registry/components/editor/use-create-editor';
import { Editor, EditorContainer } from '@/registry/ui/editor';

export default function EditorDefault() {
  const editor = useCreateEditor({
    plugins: [...editorPlugins],
  });

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor variant="fullWidth" placeholder="Type your message here." />
      </EditorContainer>
    </Plate>
  );
}
