export const FriendListItem = props =>{

    const {avatar, name, isOnline} = props;

    return(
<li>
    <span>{isOnline}</span>
    <img src={avatar} alt="User avatar" width={48} />
    <p>{name}</p>
</li>

    )

}