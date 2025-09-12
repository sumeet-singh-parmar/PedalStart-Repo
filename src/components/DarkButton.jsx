import React from "react";

const DarkButton = ({ children = "Join PedalInvest Now" }) => {
  return (
    <>
      <button className="cssbuttons-dark-io-button">
        {children}
        <div className="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>

      <style jsx>{`
        .cssbuttons-dark-io-button {
          background: #0F0F0F;
          color: white;
          font-family: "Montserrat", sans-serif;
          padding: 0.35em 1.2em 0.35em 1.6em;
          font-size: 15px;
          font-weight: 500;
          border-radius: 10em;
          border: none;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
          height: 2.8em;
          padding-right: 3.3em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cssbuttons-dark-io-button .icon {
          background: #2266FF;
          margin-left: 1em;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.2em;
          width: 2.2em;
          border-radius: 10em;
          box-shadow: 0.1em 0.1em 0.6em 0.2em #133583ff;
          right: 0.3em;
          transition: all 0.3s;
        }

        .cssbuttons-dark-io-button:hover .icon {
          width: calc(100% - 0.6em);
        }

        .cssbuttons-dark-io-button .icon svg {
          width: 1.1em;
          transition: transform 0.3s;
          color: #FFFFFF;
        }

        .cssbuttons-dark-io-button:hover .icon svg {
          transform: translateX(0.1em);
        }

        .cssbuttons-dark-io-button:active .icon {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
};

export default DarkButton;
