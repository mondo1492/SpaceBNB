import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AddReviewModal from './create_review';

class RoomReviews extends React.Component {
  constructor(props){
    super(props);
    this.state = { reviews: [] };
  }

  componentWillMount() {
    this.props.viewReviews(this.props.match.params.id);
    this.allReviews = this.allReviews.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   this.props.addReview(e.currentTarget.value).then(
  //     () => this.setState(
  //       { reviews: this.props.viewReviews(this.props.currentUser.id) }
  //   ));
  // }

  allReviews() {
    return(
      <ul>
        {this.props.reviews.reverse().map((review, i) =>(
          <li className="review-index-item" key={review.id}>
            <h4>Name: {review.reviewer_name ? review.reviewer_name : "" }</h4>
            <h4>Body: {review.body ? review.body : "" }</h4>
            <h4>Rating: {review.rating ? review.rating : "" }</h4>
          </li>
        ))}
      </ul>
    );
  }

  addButton() {
    const reviewerName = this.props.currentUser.username;
    const roomId = this.props.match.params.id;
    return(
      <div>
        <AddReviewModal reviewerName={reviewerName} roomId= {roomId} addReview= {this.props.addReview}/>
      </div>
    );
  }

  render() {
    const displayAllReviews = this.allReviews();
    const displayAddButton = this.props.currentUser ? this.addButton() : "";
    return(
      <div className="show-page-reviews">
        <h2>Reviews</h2>
        {displayAddButton}
        {displayAllReviews}
      </div>
    );
  }
}

export default withRouter(RoomReviews);