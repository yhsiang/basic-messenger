import React from 'react';

//  AvatarProps = {
//    src: String
//    alt: String
// }
const Avatar = ({ src, alt }) => {
  return (
    <div className="Avatar">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;