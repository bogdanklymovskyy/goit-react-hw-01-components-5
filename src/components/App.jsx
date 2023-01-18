import statisticsData from '../data/stats-info.json';
import userInfo from '../data/user-info.json';
import friendsArray from '../data/friends-info.json';
import transactions from '../data/transactions-info.json';
import Profile from './Profile/Profile.jsx';
import SectionStatistics from './SectionStatistics/SectionStatistics.jsx';
import FriendList from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <>
      <Profile
        userName={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        followers={userInfo.stats.followers}
        views={userInfo.stats.views}
        likes={userInfo.stats.likes}
      />
      <SectionStatistics title="Upload stats" stats={statisticsData} />
      <FriendList friendsArray={friendsArray} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
