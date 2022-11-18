import { useEffect, useState } from "react";
import useUser from "../../hooks/use-user";
import { useNavigate } from "react-router-dom";
import { addNewUrl, getUrls, linkUrl } from "../services/url";

const FE_URL = process.env.REACT_APP_FE_URL

const UrlShortner = () => {
  const [url, setUrl] = useState("");
  const { loading, userStatus } = useUser();
  const navigate = useNavigate();
  const [data, setData] = useState([])

  useEffect(() => {
    if (!loading && !userStatus) {
      navigate("/login")
    }
  }, [loading, navigate, userStatus])

  useEffect(() => {
    getUrls().then(c => {
      setData([...(c?.data?.data ?? [])])
    })
  }, [])


  const handleInsert = async () => {
    try {
      const resp = await addNewUrl({ link: url })
      if (resp?.status === 200) {
        setUrl("")
        getUrls().then(c => {
          setData([...(c?.data?.data ?? [])])
        })
      }
    } catch (error) {
      console.log(error)
    }

  }

  const handleClick = async (shortid) => {
    await linkUrl(shortid)
    getUrls().then(c => {
      setData([...(c?.data?.data ?? [])])
    })
  }

  const renderInput = () => {
    return (
      <div className="d-flex align-items-end">
        <div className="mb-3" style={{ width: "300px" }}>
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
        <button type="submit" className={`btn btn-primary h-25 mb-3 ml-5 bg-blue-500`} style={{ marginLeft: "50px" }} onClick={handleInsert}>
          Submit
        </button>
      </div>
    );
  };

  const renderUrls = () => {
    return <div>
      <div className="grid grid-cols-4">
        <div className="col-span-2 p-3">URL</div>
        <div className="p-3">Short URL</div>
        <div className="p-3">Count</div>
      </div>
      <div>{
        data.map(d => <div className="grid grid-cols-4 p-3">
          <div className="col-span-2 border-r">{d.link}</div>
          <div className=" p-3" onClick={() => handleClick(d.short_id)}>
            <a href={d?.link} target="_blank" rel="noreferrer">
              {`${FE_URL}/${d.short_id}`}
            </a>
          </div>
          <div className=" p-3">{d.count}</div>
        </div>)
      }
      </div>
    </div>
  }

  if (!loading && userStatus) {
    return <div>
      <div>
        {renderInput()}
      </div>
      <div className="">
        {renderUrls()}
      </div>


    </div>;
  }

  return <></>;
};

export default UrlShortner;
