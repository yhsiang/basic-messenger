import React from 'react';

//  AvatarProps = {
//    url: string
// }
const Avatar = ({ src, alt }) => {
  return (
    <div className="Avatar">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;