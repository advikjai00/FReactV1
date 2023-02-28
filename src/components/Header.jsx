import React from 'react'
// import { ConnectButton } from '@rainbow-me/rainbowkit'

function Header() {
  return (
    <nav>
      <div className="container">
        <img
          className="profile-photo"
          src="./images/Logo.png"
          alt="Brand Logo"
        />
        <h2 className="log">OpenCircle</h2>
        <div className="create">
          <label for="create-post" className="btn btn-primary">
            Create
          </label>
          {/* <div className="wallet-button">
            <ConnectButton
              showBalance={false}
              chainStatus="icon"
              accountStatus="avatar"
            />
          </div> */}
          {/* <div className="profile-photo">
            <img src="./images/profile-1.jpg " alt="last" />
          </div> */}
        </div>
      </div>
    </nav>
  )
}
export default Header
