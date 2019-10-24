import React, { Component } from 'react';
import { connect } from 'react-redux';
import getNews from './redux/actionCreators';


const Result = ({results}) => {
  return results.map(item => <li><a href={item.url}>{item.title}</a><br/></li>);
}

class App extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      pageNumber : 0,
      allResults : [],
      pageResults : [],
    }  
    this.handleSearch = this.handleSearch.bind(this);
    this.getNextResults = this.getNextResults.bind(this);
  }

  componentWillReceiveProps({newsdata}) {
    this.setState( (state, props) => 
        ({ pageNumber:1, allResults : newsdata, pageResults : newsdata.slice(0,10)}) 
      );
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.getNews(e.target.elements.searchstring.value);
  }


  getNextResults() {
    this.setState ( (state,props) => {
      var index = state.pageNumber;
      return { pageNumber : index + 1, pageResults : state.allResults.slice(index*10, index*10 + 10)};
    }
    );
  }

  render() {
    //var allResults = this.props.newsdata || [] ;
    return (
      <div className="container">
        <form name="search-news" onSubmit={this.handleSearch}>
          <input type="text" name="searchstring"></input>
          <button type="submit">Search</button>
        </form>
        <div className="news-container">
          <span> Total Results : {this.state.allResults.length}</span>
          <Result results={this.state.pageResults}></Result>
          {(this.state.allResults.length > this.state.pageNumber * 10 ) && <button onClick={this.getNextResults}>Next</button>}     
        </div>        
      </div>
    );
  }
}

function mapStateToProps( { newsdata }) {
  return { newsdata };
}

export default connect(mapStateToProps,{ getNews }) (App);