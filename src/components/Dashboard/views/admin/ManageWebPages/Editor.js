import React, { useState } from "react";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), {
  ssr: false,
});
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box, Button, Typography } from "@mui/material";

const EditorView = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  //return only on the client-side
  return (
    <>
      <Box
        sx={{
          padding: "20px",
          border: "1px solid lightgray",
        }}
      >
        <Editor
          editorStyle={{ minHeight: "500px", resize: "vertical", overflow: "hidden" }}
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </Box>
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{
            padding: "8px 24px",
          }}
          variant="contained"
        >
          <Typography>Save Changes</Typography>
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          sx={{
            padding: "8px 24px",
          }}
          variant="contained"
        >
          <Typography>Cancel</Typography>
        </Button>
      </Box>
    </>
  );
};

export default EditorView;
