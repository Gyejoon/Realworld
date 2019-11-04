import React from 'react';
import { Link } from 'react-router-dom';
import TagList from './TagList';
import Banner from './Banner';

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <Link className="nav-link disabled" to="">
                    Your Feed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="">
                    Global Feed
                  </Link>
                </li>
              </ul>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <Link to="profile.html">
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
                </Link>
                <div className="info">
                  <Link to="" className="author">
                    Eric Simons
                  </Link>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              <Link to="" className="preview-link">
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </Link>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <Link to="profile.html">
                  <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                </Link>
                <div className="info">
                  <Link to="" className="author">
                    Albert Pai
                  </Link>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <Link to="" className="preview-link">
                <h1>
                  The song you won't ever stop singing. No matter how hard you
                  try.
                </h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </Link>
            </div>
          </div>
          <TagList />
        </div>
      </div>
    </div>
  );
};

export default Home;
