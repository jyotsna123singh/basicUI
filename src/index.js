import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {

return (
<div className= "ui container comments">
<ApprovalCard>
<CommentDetail 
author="Alex" 
timeAgo="Today at 6:00 PM"
text="Wow, awesome content.!" 
avatar={faker.image.animals()}/>
</ApprovalCard>

<ApprovalCard>
<CommentDetail author="Cristina"
 timeAgo="Yesterday at 11:11 PM"
 text="Finally something good on internet today!" 
 avatar={faker.image.animals()}/>
 </ApprovalCard>

<ApprovalCard>
<CommentDetail 
author="Lexie" timeAgo="Today at 9:45 AM" 
text="Awestruck, beautiful blog."  
avatar={faker.image.animals()}/>
</ApprovalCard>

</div>


) ;
};


ReactDOM.render(<App/>, document.querySelector('#root'));