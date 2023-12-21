import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import data1 from '../data1'
import data2 from '../data2'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      pageNo : 1, 
    }
  }
  
  async componentDidMount(){
    // const apiUrl = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=e9af9d938c564037bbd6593e7e01dd36&this.props.pageSize=${this.props.pageSize}&page=${this.state.pageNo}`;
    // this.setState({loading : true});
    // const data = await fetch(apiUrl);
    // const parsedData = await data.json();
    const parsedData = data2;
    this.setState({
      articles : parsedData.articles, 
      loading : false,
      totalArt : parsedData.totalResults
    });
  }

  handleNextClick = async ()=>{
    // const apiUrl = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.state.country}&apiKey=e9af9d938c564037bbd6593e7e01dd36&this.props.pageSize=${this.props.pageSize}&page=${this.state.pageNo + 1}`;
    // this.setState({loading : true});
    // const data = await fetch(apiUrl);
    // const parsedData = await data.json();
    const parsedData = data1;
    this.setState({
      pageNo : this.state.pageNo + 1, 
      articles : parsedData.articles, 
      loading : false
    });
  }

  handlePrevClick = async ()=>{
    // const apiUrl = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.state.country}&apiKey=e9af9d938c564037bbd6593e7e01dd36&this.props.pageSize=${this.props.pageSize}&page=${this.state.pageNo - 1}`;
    // this.setState({loading : true});
    // const data = await fetch(apiUrl);
    // const parsedData = await data.json();
    const parsedData = data1;
    this.setState({
      pageNo : this.state.pageNo - 1, 
      articles : parsedData.articles, 
      loading : false
    });
  }

  render() {
    return (
      <div className='container my-2'>
        <h1>Top Headlines</h1>
        {this.state.articles.map((element)=>{
          return <div className="row row-cols-auto" key={element.url}>
          <NewsItem title={element.title} description={element.description} imglink={element.urlToImage} extlink={element.url}/>
          </div>
        })}
        {this.state.loading && <Spinner />}
        {!this.state.loading && <div className='d-flex justify-content-between'>
          <button disabled={this.state.pageNo <= 1} type="button" className="btn btn-outline-dark " onClick={this.handlePrevClick}>Prev</button>
          <button disabled={this.state.pageNo + 1 > Math.ceil(this.state.totalArt/this.props.pageSize)}type="button" className="btn btn-outline-dark" onClick={this.handleNextClick}>Next</button>
        </div>}
      </div>

    )
  }
}

export default News