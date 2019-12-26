import React, { useState } from "react";
import s from "./Detail.module.scss"
import moment from "moment"
import JQueryDatePicker from "../../JQueryDatePicker";

const Detail = (props) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <div className={s["DetailWrapper"]}>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 15 }}>
        <button className="btn btn-primary" onClick={() => setEditMode(editMode => !editMode)}>Edit</button>
      </div>
      <div className={s["content-item"]}>
        <label className="text-ellipsis">
          Title
        </label>
        <div className={s["content"]}>
          {
            editMode ?
              <input className="form-control" defaultValue="wefqwfwwefqwfw" />
              :
              <span className="text-ellipsis">wefqwfwwefqwfw</span>
          }
        </div>
      </div>
      <div className={s["content-item"]}>
        <label className="text-ellipsis">
          Description
        </label>
        <div className={s["content"]}>
          {
            editMode ?
              <textarea rows={4} className="form-control" defaultValue="wefqwfwwefqwfw wefqwfwwefqwfw wefqwfwwefqwfw wefqwfwwefqwfw wefqwfwwefqwfw wefqwfwwefqwfw wefqwfwwefqwfw" />
              :
              <span>wefqwfwwefqwfw wefqwfwwefqwfw wefqwfwwefqwfw wefqwfwwefqwfw wefqwfwwefqwfw wefqwfwwefqwfw wefqwfwwefqwfw</span>
          }
        </div>
      </div>
      <div className={s["content-item"]}>
        <label className="text-ellipsis">
          Completed Date
        </label>
        <div className={s["content"]}>
          {
            editMode ?
              <JQueryDatePicker className="form-control" value={Date.now()} onChange={console.log} />
              :
              <span className="text-ellipsis">{moment().format("YYYY/MM/DD HH:mm:ss")}</span>
          }
        </div>
      </div>
    </div>
  )
};

export default Detail;
