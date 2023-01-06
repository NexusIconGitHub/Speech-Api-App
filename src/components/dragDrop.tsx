import React from "react";
// Import the useDropzone hooks from react-dropzone
import styled from "styled-components";
import tw from "twin.macro";
import { useDropzone } from "react-dropzone";


const DragDropContainer = styled.div`
  ${tw`
  flex
    `}
`;

const DragDropStyle = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    bg-blue-100
    h-20
    
    `}
`;

export interface dragDropProps {
  onDrop: any;
  accept: any;
}

const Dropzone: React.FC<dragDropProps> = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  /*
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */

  return (
    <DragDropContainer>
      <DragDropStyle>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div>
            {isDragActive ? (
              <p >Release to drop the files here</p>
            ) : (
              <p >
                Drag 'n' drop some files here, or click to select files
              </p>
            )}
          </div>
        </div>
      </DragDropStyle>
    </DragDropContainer>
  );
};

export default Dropzone;




