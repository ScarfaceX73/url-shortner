import { useState } from "react";
import useUser from "../../hooks/use-user";

const UrlShortner = () => {
  const { loading, userStatus } = useUser();

  console.log(loading, userStatus);

  const [url, setUrl] = useState("");
  const renderInput = () => {
    return (
      <div className="d-flex">
        <div className="mb-3">
          <label htmlFor="url-input" className="form-label">
            URL
          </label>
          <input
            type="input"
            className="form-control"
            id="url-input"
            value={url}
            onChange={(e) => {
              setUrl(e?.target?.value);
            }}
          />
        </div>
        <button type="submit" className={`btn btn-primary`}>
          Submit
        </button>
      </div>
    );
  };

  if (!loading && userStatus) {
    return <>{renderInput()}</>;
  }

  return <></>;
};

export default UrlShortner;
