import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
  return (
  	<div className="ui container comments">
  	   <ApprovalCard>
  	   <CommentDetail author="Sam"timeAgo="Today at 2:00 PM" body="Have a nice holiday"src={faker.image.avatar()}/>
  	   </ApprovalCard>
  	   <ApprovalCard>
  	   <CommentDetail author="Alex" timeAgo="Today at 5:00 PM" body="I hate holiday"src={faker.image.avatar()}/>
  	   </ApprovalCard>
  	   <ApprovalCard>
  	   <CommentDetail author="Jane"timeAgo="Today at 10:45 AM" body="I wish I have more holiday"src={faker.image.avatar()}/>
  	   </ApprovalCard>
  	</div>

   );
}; 

ReactDOM.render(<App />, document.querySelector('#root'));