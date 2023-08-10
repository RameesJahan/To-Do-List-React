import React from "react";

function Dialog({onCancel,onRemove}) {
  return (
    <div className="dm-background">
          <div className="dm-container">
            <p className="dm-title text-center">Are You Sure?</p>
            <p className="dm-desc text-center">Do you really want to remove this task?This process cannot be undone.</p>
            <center>
              <button onClick={onCancel} className="btn cancel">Cancel</button>
              <button onClick={onRemove} className="btn remove">Remove</button>
            </center>
          </div>
        </div>
  )
}
export default Dialog;