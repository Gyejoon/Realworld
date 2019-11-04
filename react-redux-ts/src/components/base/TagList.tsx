import React from 'react';
import { Link } from 'react-router-dom';

interface TagListProps {}

const TagList: React.FC<TagListProps> = () => {
  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>

        <div className="tag-list">
          <Link to="" className="tag-pill tag-default">
            programming
          </Link>
          <Link to="" className="tag-pill tag-default">
            javascript
          </Link>
          <Link to="" className="tag-pill tag-default">
            emberjs
          </Link>
          <Link to="" className="tag-pill tag-default">
            angularjs
          </Link>
          <Link to="" className="tag-pill tag-default">
            react
          </Link>
          <Link to="" className="tag-pill tag-default">
            mean
          </Link>
          <Link to="" className="tag-pill tag-default">
            node
          </Link>
          <Link to="" className="tag-pill tag-default">
            rails
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TagList;
