import {
    FriendsIcon,
    GroupsIcon,
    HelpIcon,
    MapIcon,
    MessagesIcon,
    NewsIcon, OtherServicesIcon,
    ProfileIcon,
    SheltersIcon,
    StoreIcon, VolounteerIcon,
    WantedIcon,
    WikiItem
} from "../components/IconNavItems";

export const navItemsMain = [
    {id: 0, title: 'Profile', icon: <ProfileIcon/>, href:'profile'},
    {id: 1, title: 'News', icon: <NewsIcon/>, href:'news'},
    {id: 2, title: 'Map', icon: <MapIcon/>, href:'map'},
    {id: 3, title: 'Wanted Pets', icon: <WantedIcon/>, href:'wanted'},
    {id: 4, title: 'Encyclopedia', icon: <WikiItem/>, href:'wiki'},
    {id: 5, title: 'Messages', icon: <MessagesIcon/>, href:'messenger'},
    {id: 6, title: 'Friends', icon: <FriendsIcon/>, href:'friends'},
    {id: 7, title: 'Groups', icon: <GroupsIcon/>, href:'groups'},
]
export const navItemsServices = [
    {id: 0, title: 'Vet Help', icon: <HelpIcon/>, href:'help'},
    {id: 1, title: 'Pet Store', icon: <StoreIcon/>, href:'store'},
    {id: 2, title: 'Pet Shelters', icon: <SheltersIcon/>, href:'shelters'},
    {id: 3, title: 'Volounteer teams', icon: <VolounteerIcon/>, href:'volounteer'},
    {id: 4, title: 'Other services', icon: <OtherServicesIcon/>, href:'services'},
]