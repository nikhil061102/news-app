import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const { title, description, extlink, imglink, author, datetime } = this.props;
    return (
      <div className="col my-3">
        <div  className="card" style={{ width: '18rem' }}>
        {/* <div className="card"> */}
          <img src={imglink} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p style={{ color: 'orange' }}>By {!author?"Unknown":author} </p>
            <p style={{ color: 'red' }}>On {new Date(datetime).toGMTString()} </p>
            <a href={extlink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
