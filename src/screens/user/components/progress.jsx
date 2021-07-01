import React, { useEffect } from "react";
import useFile from "../../../hooks/uploadFile";
import { useAuth } from "../../../hooks/AuthContext";

export default function Progress({ file, setFile, setImageUrls }) {
  const { progress, url } = useFile(file);
  const { addPhotoURL } = useAuth();

  useEffect(() => {
    if (url.url) {
      setFile(null);
      setImageUrls(url.url);
      addPhotoURL(url.url);
    }
    // eslint-disable-next-line
  }, [url.url]);

  return <div>Uploading: {Math.trunc(progress)}%</div>;
}
