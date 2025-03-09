import React from "react";

function UserInfo({ user, onNameChange }) {
  return (
    <div className="user-info">
      <label htmlFor="name" class="me-2">
        Name:{" "}
      </label>
      <input
        type="text"
        id="name"
        value={user.name}
        onChange={onNameChange}
        className="form-input"
      />
      <p>
        Welcome, <b>{user.name}!</b>
      </p>
    </div>
  );
}

export default UserInfo;
