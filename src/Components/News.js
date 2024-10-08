// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import NewsItems from './NewsItems';

// export class News extends Component {
//     constructor() {
//         super();
//         this.state = {
//             articles: [], // Initialize articles to an empty array
//             loading: false,
//             page: 1
//         };
//     }

//     async componentDidMount() {
//         try {
//             let url = "https://newsapi.org/v2/everything?q=from=2024-09-04&sortBy=publishedAt&apiKey=a73d9cdd6c254cb9b6adea5ab04183e0";
//             let data = await fetch(url);
//             let parsedData = await data.json();
//             console.log(parsedData); // Debugging: Check API response
//             this.setState({ articles: parsedData.articles || [] });
//         } catch (error) {
//             console.error("Failed to fetch articles:", error);
//         }
//     }

//     handleNextClick = async () => {
//         console.log("next");
//         let url = `https://newsapi.org/v2/everything?q=from=2024-09-04&sortBy=publishedAt&apiKey=a73d9cdd6c254cb9b6adea5ab04183e0&page=${this.state.page + 1}`;
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         console.log(parsedData);
//         this.setState({
//             articles: parsedData.articles || [],
//             page: this.state.page + 1
//         });
//     };

//     handlePrevClick = async () => {
//         console.log("prev");
//         let url = `https://newsapi.org/v2/everything?q=from=2024-09-04&sortBy=publishedAt&apiKey=a73d9cdd6c254cb9b6adea5ab04183e0&page=${this.state.page - 1}`;
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         console.log(parsedData);
//         this.setState({
//             articles: parsedData.articles || [],
//             page: this.state.page - 1
//         });
//     };

//     render() {
//         return (
//             <div className="container my-3">
//                 <div className="row">
//                     {this.state.articles.length > 0 ? (
//                         this.state.articles.map((element) => (
//                             <div className="col-md-4" key={element.url}>
//                                 <NewsItems
//                                     title={element && element.title ? element.title.slice(0, 45) : "No Title Available"}
//                                     description={element && element.description ? element.description.slice(0, 88) : "No Description Available"}
//                                     src={element && element.urlToImage ? element.urlToImage : "default-image.jpg"}
//                                     Newsurl={element.url}
//                                 />
//                             </div>
//                         ))
//                     ) : (
//                         <div>No articles available</div>
//                     )}
//                 </div>
//                 <div className="d-flex justify-content-between">
//                     <button
//                         disabled={this.state.page <= 1}
//                         className="btn btn-primary"
//                         onClick={this.handlePrevClick}
//                     >
//                         Previous
//                     </button>
//                     <button
//                         className="btn btn-primary"
//                         onClick={this.handleNextClick}
//                     >
//                         Next
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default News;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItems from './NewsItems';

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
        document.title = this.state.category;
    }

    async fetchArticles(category) {
        try {
            const url = `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&apiKey=a73d9cdd6c254cb9b6adea5ab04183e0&page=${this.state.page}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData); // Debugging: Check API response
            this.setState({ articles: parsedData.articles || [] });
        } catch (error) {
            console.error("Failed to fetch articles:", error);
        }
    }

    async componentDidMount() {
        this.fetchArticles(this.props.category);
    }

    async componentDidUpdate(prevProps) {
        // If the category prop has changed, fetch new articles
        if (prevProps.category !== this.props.category) {
            this.setState({ page: 1 }, () => {
                this.fetchArticles(this.props.category);
            });
        }
    }

    handleNextClick = async () => {
        const newPage = this.state.page + 1;
        this.setState({ page: newPage }, () => {
            this.fetchArticles(this.props.category);
        });
    };

    handlePrevClick = async () => {
        const newPage = this.state.page - 1;
        this.setState({ page: newPage }, () => {
            this.fetchArticles(this.props.category);
        });
    };

    render() {
        return (
            <div className="container my-3">
                <div className="row">
                    {this.state.articles.length > 0 ? (
                        this.state.articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItems
                                    title={element && element.title ? element.title.slice(0, 45) : "No Title Available"}
                                    description={element && element.description ? element.description.slice(0, 88) : "No Description Available"}
                                    src={element && element.urlToImage ? element.urlToImage : "default-image.jpg"}
                                    Newsurl={element.url}
                                />
                            </div>
                        ))
                    ) : (
                        <div>No articles available</div>
                    )}
                </div>
                <div className="d-flex justify-content-between">
                    <button
                        disabled={this.state.page <= 1}
                        className="btn btn-primary"
                        onClick={this.handlePrevClick}
                    >
                        Previous
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={this.handleNextClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

News.propTypes = {
    category: PropTypes.string.isRequired
};

export default News;
