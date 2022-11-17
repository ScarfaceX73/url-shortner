import { useState } from "react";
import useUser from "../../hooks/use-user";

const UrlShortner = () => {
  const { loading, userStatus } = useUser();

  console.log(loading, userStatus);

  const [url, setUrl] = useState("");
  const renderInput = () => {
    return (
      <>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={url}
            onChange={(e) => {
              setUrl(e?.target?.value);
            }}
          />
        </div>
        <button type="submit" className={`btn btn-primary`}>
          Submit
        </button>
      </>
    );
  };

  if (!loading && userStatus) {
    return <>{renderInput()}</>;
  }

  return <></>;
};

export default UrlShortner;
