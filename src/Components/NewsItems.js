import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NewsItems extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,  // Track hover state for the card
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { title, description, src, Newsurl } = this.props;
    const { isHovered } = this.state;

    return (
      <div className="my-3" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div
          className="card"
          style={isHovered ? { ...styles.card, ...styles.cardHover } : styles.card}
        >
          <img
            src={!src ? "https://media.cryptoglobe.com/2023/03/gold-dogecoin-768x511.jpg" : src}
            className="card-img-top"
            alt="News"
            style={isHovered ? { ...styles.img, ...styles.imgHover } : styles.img} // Apply dark effect on hover
          />
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title" style={styles.title}>{title}</h5>
            <p className="card-text" style={styles.text}>{description}</p>
            <a
              href={Newsurl}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              style={isHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

NewsItems.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  Newsurl: PropTypes.string,
};

export default NewsItems;

const styles = {
  card: {
    width: '18rem',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, filter 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-5px)',  // Adds a slight lift on hover
  },
  img: {
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    height: '200px',
    objectFit: 'cover',
    transition: 'filter 0.3s ease',
  },
  imgHover: {
    filter: 'brightness(0.5)',  // Darkens the image on hover
  },
  cardBody: {
    textAlign: 'center',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  text: {
    color: '#555',
    fontSize: '0.95rem',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: 'black',
    border: 'none',
    borderRadius: '50px',
    padding: '10px 20px',
    fontSize: '0.95rem',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
    color: '#fff',
  },
  buttonHover: {
    backgroundColor: 'grey',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};
