export const Profile = props=>{
    const {username, tag, location, avatar, stats: {followers, views, likes}} = props
return(

    <div>
        <div>
            <img src = {avatar} alt="User avatar"></img>
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>
    <ul>
    <li>
      <span >Followers</span>
      <span >{followers}</span>
    </li>
    <li>
      <span >Views</span>
      <span>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </ul>
    </div>

)
}