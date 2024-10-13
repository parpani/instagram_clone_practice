//import './gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation.js';

const App=()=> {

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};
export default App;

{/* <Text style={{fontFamily:getFontFamily({baseFont:'Roboto'},{weight:'500'})}}>Hello</Text> */} {/*not working*/}

// return (
//   <SafeAreaView style={{flex:1}}>
//     <View style={globalStyles.header}>
//       <Title title={"Let's Explore"} />
//       <TouchableOpacity style={globalStyles.msgIcon}>
//         <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
//         <View style={globalStyles.msgIconContainer}>
//           <Text style={globalStyles.msgNumber}>2 </Text>
//         </View>
//       </TouchableOpacity>
//     </View>

// {/* FlatList for User Stories */}
//     <View style={globalStyles.userStoryContainer}>
//       <FlatList
//         data={userStoriesRenderedData}
//         renderItem={({item}) => 
//           <UserStory key={'userStory' + item.id} firstName={item.firstName} profileImage={item.profileImage}/>
//         } 
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         onEndReachedThreshold={0.5} //Load more data when 50% of data has been seen
//         onEndReached={() => {
//           //console.log("Grab more items, we have reached 50% threshold") //callback fn to actually get data when threshold has been reached
//           if(isLoadingUserStories){
//             return;  //if we are already getting data then dont disturb the process
//           }
//           setisLoadingUserStories(true);  //otherwise set it true and get data
//           const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize);
//           if(contentToAppend.length > 0){  //if we have fetched the data
//             setUserStoriesCurrentPage(userStoriesCurrentPage + 1); //increase the currentPage number
//             setuserStoriesRenderedData(prev => [...prev, ...contentToAppend]);  //
//           }
//             setisLoadingUserStories(false);
//         }}
//       />
//     </View>

// {/* FlatList for User Posts */}
//     <View style={globalStyles.userPostContainer}>
//       <FlatList
//         ListHeaderComponent={<></>}
//         data={userPosts}
//         renderItem={({item})=>
//           <UserPosts key={'userPosts' + item.id} firstName={item.firstName} lastName={item.lastName} location={item.location} likes={item.likes} comments={item.comments} bookmarks={item.bookmarks} image={item.image} profileImage={item.profileImage}/>
//         }
//         showsVerticalScrollIndicator={false}
//       />
//     </View>

//   </SafeAreaView>
// );
// }