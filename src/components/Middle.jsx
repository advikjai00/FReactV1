import Feeds from './Feeds'
function Middle() {
  return (
    <>
      <div className="middle">
        {/* <form action="" className="create-post">
                              <div className="profile-photo">
                                    <img src="./images/profile-1.jpg" alt="" />
                              </div>
                              <input type="text" placeholder="What is in your mind , Diana? " id="create-post">
                              <input type="submit" value="post" className="btn btn-primary">
                        </form> */}
        {/* <!--=============FEEDS============================= --> */}
        <Feeds />
        <Feeds />
        <Feeds />

        {/* <!------------------------END OF FEEDS----------------------------> */}
      </div>
    </>
  )
}
export default Middle
