// import React from 'react'
// import { useSelector } from 'react-redux';
// import axios from 'axios'

// const Pagination = () => {
//     const loginData = useSelector(state => state.loginReducer)
//     let token = loginData.postItems.token;
//     console.log("Pagination token = "+token)

//     const handlePage=()=>{

//         // if(number==="pagination.previous")
//         // {
//         //    number= --usersList.users.current_page
//         // }
//         // else if(number==="pagination.next")
//         // {
//         //     number=++usersList.users.current_page
//         // }
        
//         // axios.get(`http://34.210.129.167/api/users?page=${number}`,{
//         //     headers:{"Authorization" : `Bearer ${token}`},
//         // } )
//         // .then(res=>res.json()).then(res=>{
//         //  setUsersList(res)
//         //    console.log(res)
//         // })
//     }

//     return (
//         <Pagination>
      
//             {/* {
//                  usersList?.users?.links?.map((pageNumber,index)=> {
//                     return(
//                         <Pagination.Item onClick={e=>{
                            
//                             handlePage(pageNumber.label)
//                         }}>{
//                             pageNumber.label==="pagination.previous"? "Prev" : pageNumber.label==="pagination.next"?"Next":pageNumber.label
//                     }</Pagination.Item>
//                     )
//                  })
//             } */}
//     </Pagination>
//     )
// }

// export default Pagination
