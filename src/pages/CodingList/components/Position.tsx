import React from "react";

export default function Position(props) {

  const {logo, title, company, response, career, region } = props;
  return (
    <div className="flex">
      <div>
        <img>{logo}</img>
      </div>
      <div>
        <div>{title}</div>
        <div className="flex">
          <div>{company}</div>
          <div>{response}</div>
        </div>
        <div>{career}</div>
        <div>{region}</div>
      </div>
    </div>
  );
}
