function Feeds() {
  return (
    <>
      <div className="feeds">
        {/* <!--=============FEED1============================= --> */}
        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-photo">
                <img src="./images/profile-13.jpg" alt="" />
              </div>
              <div className="ingo">
                <h3>Lana Rose</h3>
                <small>Dubai , 15 MINUTES AGO</small>
              </div>
            </div>
            <span className="edit">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </div>
          <div className="photo">
            <img src="./images/profile.jpg" alt="" />
          </div>
          <div className="action-buttons">
            <div className="interaction-buttons">
              <span>
                <i className="uil uil-heart"></i>
              </span>
              <span>
                <i className="uil uil-comment-dots"></i>
              </span>
              <span>
                <i className="uil uil-share-alt"></i>
              </span>
            </div>
            <div className="bookmark">
              <span>
                <i className="uil uil-bookmark-full"></i>
              </span>
            </div>
          </div>
          <div className="liked-by">
            <span>
              <img src="./images/profile-10.jpg" alt="" />
            </span>
            <span>
              <img src="./images/profile-4.jpg" alt="" />
            </span>
            <span>
              <img src="./images/profile-15.jpg" alt="" />
            </span>
            <p>
              Liked by <b>Ernest Achiever</b> and <b>2,347 others</b>
            </p>
          </div>
          <div className="caption">
            <p>
              <b>Lana Rose</b> Lorem ipsum dolor sit amet consectetur
              <span className="harsh-tag">#lifestyle</span>
            </p>
          </div>
          <div className="comments text-muted">View all 277 comments</div>
        </div>
        {/* <!--============================END OF FEED=================== --> */}
      </div>
    </>
  )
}
export default Feeds
