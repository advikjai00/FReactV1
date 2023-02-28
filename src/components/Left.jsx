function Left() {
  return (
    <>
      <div className="left">
        <a href="" className="profile">
          <div className="profile-photo">
            <img src="./images/profile-1.jpg" alt="" />
          </div>
          <div className="handle">
            <h4>Diana Ayi</h4>
            <p className="text-muted">@dayi</p>
          </div>
        </a>
        {/* <!-- ================Sidbar======================= --> */}
        <div className="sidebar">
          <a className="menu-item active">
            <span>
              <i className="uil uil-home"></i>
            </span>
            <h3>Home</h3>
          </a>
          <a className="menu-item ">
            <span>
              <i className="uil uil-compass"></i>
            </span>
            <h3>Explore</h3>
          </a>
          <a className="menu-item" id="theme">
            <span>
              <i className="uil uil-palette"></i>
            </span>
            <h3>Theme</h3>
          </a>
          <a className="menu-item">
            <span>
              <i className="uil uil-setting"></i>
            </span>
            <h3>Settings</h3>
          </a>
        </div>
        <label for="create-post" className="btn btn-primary">
          Create Post
        </label>
      </div>
    </>
  )
}

export default Left
