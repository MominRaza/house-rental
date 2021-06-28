import { useEffect, useState } from "react";
import { storage } from "../firebase_config";

const useFile = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(
      file.type + "-" + file.size + "-" + file.name
    );

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl({ url, storageRef });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useFile;
