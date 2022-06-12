import React, { useState } from "react";
import { availableLogo, socialLinks } from "./constants";

export default function Share(props) {
  const [state, setState] = useState(socialLinks);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [text, setText] = useState("");
  const [url, seturl] = useState("");
  const [platform, setplatform] = useState("");
  const [delBtnVis, setdelBtnVis] = useState(true);
  const handleOnTextChange = (event) => {
    setText(event.target.value);
  };
  const handleOnURLchange = (event) => {
    seturl(event.target.value);
  };
  const handleOnPltChange = (event) => {
    setplatform(event.target.value);
  };
  const triggerClick = (item) => {
    alert("You will be redirected to " + item);
  };

  const removeLinks = (link) => {
    console.log("deleted");
    console.log(link);
    let filteredArray = state.filter((item) => item.href !== link);
    setState(filteredArray);
    console.log(state);
  };
  const handleClick = () => {
    let newlink = {
      href: url,
      shareText: text,
      platform: platform,
      viewWhenCollpased: false
    };
    setState([...state, newlink]);
  };

  return (
    <>
      <div
        className="container"
        style={{
          width: "8vw"
        }}
      >
        {state.map((item) => (
          <div key={item.href}>
            {((isCollapsed && item.viewWhenCollpased) || !isCollapsed) && (
              <span style={{ display: "flex", padding: "16px" }}>
                <a
                  onClick={() => triggerClick(item.platform)}
                  href={`${item.href}${encodeURIComponent(item.shareText)}`}
                >
                  <img
                    src={`/assets/${
                      availableLogo.has(item.platform.toLowerCase())
                        ? item.platform.toLowerCase()
                        : "random"
                    }.svg`}
                    alt=""
                  />
                </a>
                {!delBtnVis && (
                  <button className="btn btn-danger mx-2" 
                    onClick={() => removeLinks(item.href)}
                    style={{ borderRadius: '40px' , height: 'fit-content' }}
                  >
                    &#x2715;
                  </button>
                )}
              </span>
            )}
          </div>
        ))}
        {isCollapsed && (
          <span style = {{padding: "16px" }}onClick={() => setIsCollapsed(() => false)}>
            <img src="/assets/share.svg"alt="" />
          </span>
        )}
        {!isCollapsed && (
          <span style = {{padding: "16px" }} onClick={() => setIsCollapsed(() => true)}>
            <img src="/assets/close.svg" alt="" />
          </span>
        )}
      </div>
      <div className="container" style={{ marginTop: "50px" }}>
        <button className="btn btn-primary"  onClick={props.toggleDisplay}>Add more Links</button>
        <button className="btn btn-danger mx-2" 
          onClick={() => setdelBtnVis((delBtnVis) => !delBtnVis)}
          
        >
          Remove Links
        </button>
      </div>
      {props.display && (
        <div className="container" style={{ marginTop: "50px" }}>
          <input
            className="form-control"
            type="text"
            value={url}
            onChange={handleOnURLchange}
            placeholder="Set Url"
          />
          <br />
          <input
            className="form-control"
            type="text"
            value={platform}
            placeholder="Set Platform"
            onChange={handleOnPltChange}
          />
          <br />
          <input
            className="form-control"
            type="text"
            value={text}
            placeholder="Set Share Text"
            onChange={handleOnTextChange}
          />
          <br />
          <button type="button" className="btn btn-dark" onClick={handleClick}>
            Add
          </button>
        </div>
      )}
    </>
  );
}
