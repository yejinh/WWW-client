import React  from 'react';

const ProjectMembers = ({ loggedInUser, member, onRemoveClick }) => (
  <li
    key={member._id}
    className="new-project-members-member"
  >
    <span>{member.name}</span>
    {loggedInUser._id !== member._id &&
      <button onClick={() => onRemoveClick(member)}>REMOVE</button>
    }
  </li>
);

export default ProjectMembers;
