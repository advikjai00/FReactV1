function Right() {
  return (
    <>
      <div className="right">
        <div className="messages">
          <div className="heading">
            <h4>Messages</h4> <i className="uil uil-edit"></i>
          </div>
          {/* <!------------------search bar------------------> */}
          <div className="search-bar">
            <i className="uil uil-search"></i>
            <input
              type="search"
              placeholder="Search Messages"
              id="message-search"
            />
          </div>
          {/* <!------------------MESSAGES CATEGORY-------- --> */}
          <div className="category">
            <h6 className="active">primary</h6>
            <h6>General</h6>
            <h6 className="messages-requests">Requests(7)</h6>
          </div>
          {/* <!------------MESSAGE-------------> */}
          <div className="message">
            <div className="profile-photo">
              <img src="./images/profile-2.jpg" alt="" />
            </div>
            <div className="message-body">
              <h5 className="frind">Edem Quist</h5>
              <p className="text-muted">Just woke up bruh</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-photo">
              <img src="./images/profile-3.jpg" alt="" />
              <div className="active"></div>
            </div>
            <div className="message-body">
              <h5 className="frind">Franca Deila</h5>
              <p className="text-bold">Received bruh. Thanks!</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-photo">
              <img src="./images/profile-4.jpg" alt="" />
            </div>
            <div className="message-body">
              <h5 className="frind">Jane Doe</h5>
              <p className="text-bold">Ok</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-photo">
              <img src="./images/profile-5.jpg" alt="" />
            </div>
            <div className="message-body">
              <h5 className="frind">Daniella Jackson</h5>
              <p className="text-bold">2 new messages</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-photo">
              <img src="./images/profile-6.jpg" alt="" />
            </div>
            <div className="message-body">
              <h5 className="frind">Juliet Makarey</h5>
              <p className="text-muted">lol u right</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-photo">
              <img src="./images/profile-7.jpg" alt="" />
              <div className="active"></div>
            </div>
            <div className="message-body">
              <h5 className="frind">Chantel Msiza</h5>
              <p className="text-bold">Birthday Tomorrow!</p>
            </div>
          </div>
        </div>
        {/* <!-- ---------------------END OF MESSAGES ------------------------ --> */}
        {/* <!-- -----------------------FREIND REQUESTS ----------------------- --> */}
        <div className="frind-requests">
          <h4>Requests</h4>
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src="./images/profile-8.jpg" alt="" />
              </div>
              <div>
                <h5>Hajia Bintu</h5>
                <p className="text-muted">8 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src="./images/profile-9.jpg" alt="" />
              </div>
              <div>
                <h5>Jackline Mensah</h5>
                <p className="text-muted">2 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src="./images/profile-10.jpg" alt="" />
              </div>
              <div>
                <h5>Jennifer Lawrence</h5>
                <p className="text-muted">18 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Right
