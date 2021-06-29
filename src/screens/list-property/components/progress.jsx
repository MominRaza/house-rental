import React, { useEffect } from "react";
import useFile from "../../../hooks/uploadFile";

export default function Progress({ file, setFile, getFileUrl }) {
  const { progress, url } = useFile(file);

  useEffect(() => {
    if (url.url) {
      setFile(null);
      getFileUrl(url);
    }
    // eslint-disable-next-line
  }, [url.url]);

  return <div>Uploading: {Math.trunc(progress)}%</div>;
}
