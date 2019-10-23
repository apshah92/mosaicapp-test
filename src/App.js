import React, { Component } from 'react';
import { connect } from 'react-redux';
import getNews from './redux/actionCreators';


const Result = ({results}) => {
  return results.map(item => <li><a href={item.url}>{item.title}</a><br/></li>);
}

class App extends Component {
  constructor(props) {
    super(props);    
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.getNews(e.target.elements.searchstring.value);
  }


  render() {
    var allResults = this.props.newsdata || [] ;
    return (
      <div className="container">
        <form name="search-news" onSubmit={this.handleSearch}>
          <input type="text" name="searchstring"></input>
          <button type="submit">Search</button>
        </form>
        <div className="news-container">
          <Result results={allResults}></Result>
        </div>        
      </div>
    );
  }
}

function mapStateToProps( { newsdata }) {
  return { newsdata };
}

export default connect(mapStateToProps,{ getNews }) (App);