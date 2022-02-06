import React from "react";
import { useSelector } from "react-redux";
import "./Widgets.css";

const Widgets = () => {
  const logs = useSelector((state) => state.logs);
  return (
    <div className="widgets">
      <h2>HTTP Request Status</h2>
      {logs.map((log, i) => {
        return (
          <div
            key={`${log.url}-${i}`}
            className={`log ${log.status >= 400 ? "error" : "success"}`}
          >
            <p>
              <strong>{log.method.toUpperCase()}</strong>
              <small>{log.url}</small>
              <span>{log.status}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Widgets;
