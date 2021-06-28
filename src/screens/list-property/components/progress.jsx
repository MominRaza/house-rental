import React, { useEffect } from "react";
import useFile from "../../../hooks/uploadFile";

export default function Progress({ file, setFile, getImageUrl }) {
  const { progress, url } = useFile(file);
  useEffect(() => {
    if (url.url) {
      setFile(null);
      getImageUrl(url);
    }
  }, [url.url]);

  return <div>Uploading: {Math.trunc(progress)}%</div>;
}
