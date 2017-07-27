import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class RoomReviews extends React.Component {
  constructor(props){
    super(props);
    this.state = { reviews: [] };
  }

  componentWillMount() {
    this.props.viewReviews(this.props.currentUser.id);
    this.allReviews = this.allReviews.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addReview(e.currentTarget.value).then(
      () => this.setState(
        { reviews: this.props.viewReviews(this.props.currentUser.id) }
    ));
  }

  allReviews() {
    return(
      <ul>
        {this.props.reviews.map((review, i) =>(
          <li className="review-index-item" key={review.id}>
            <h4>{review.reviewer_name}</h4>
            <h4>{review.body}</h4>
            <h4>{review.rating}</h4>
            <button
              className='add-button'
              value={review.id}
              onClick={this.handleClick}>
              Add Review!
            </button>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const displayAllReviews = this.allReviews();
    return(
      <div>
        <h2>Reviews</h2>
        {displayAllReviews}
      </div>
    );
  }
}

export default withRouter(RoomReviews);
