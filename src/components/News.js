import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles : [],
      loading : false,
      pageNo : 0, 
    }
    document.title = `${capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }
  async getNews(){
    const apiUrl = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=e9af9d938c564037bbd6593e7e01dd36&pageSize=${this.props.pageSize}&page=${this.state.pageNo+1}`;
    this.setState({loading : true});
    const data = await fetch(apiUrl);
    this.props.handleProgress(40);
    const parsedData = await data.json();
    this.props.handleProgress(70);
    this.setState({
      articles : this.state.articles.concat(parsedData.articles), 
      loading : false,
      totalArt : parsedData.totalResults
    });
    this.props.handleProgress(100);
    this.setState({ pageNo : this.state.pageNo + 1 });
  }

  async componentDidMount(){
    this.getNews();
  }

  fetchMore = async ()=>{
    this.getNews();
  }
  
  render() {
    return (
      <div className='container my-2'>
        <h1 style={{ marginTop: '5%' }}>Top {capitalizeFirstLetter(this.props.category)} Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMore}
          hasMore={this.state.articles.length < this.state.totalArt}
          loader={<Spinner />}
        >
        {this.state.articles.map((element, index) => (
          <div className="row row-cols-auto" key={index}>
            <NewsItem
              title={element.title}
              description={element.description}
              imglink={element.urlToImage?element.urlToImage:"https://media.istockphoto.com/id/166054637/vector/newspaper-drawing.webp?s=2048x2048&w=is&k=20&c=cV015olxio0jgSyi7xx5Q3QpvgEJg9Y6bOfHU9HYwLs="}
              extlink={element.url}
              author={element.author}
              datetime={element.publishedAt}
            />
          </div>
        ))}
        </InfiniteScroll>
      </div>
    )
  }
}

export default News