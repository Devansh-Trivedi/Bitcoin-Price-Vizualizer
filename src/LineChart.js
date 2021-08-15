// import React from 'react';

// const LineChart=({data})=>{
//     const [mapdata, setMapdata] = useState([]);

//     useEffect(() => {
//         axios
//           .get(
//             'https://api.coincap.io/v2/assets/tron/history?interval=d1'
//           )
//           .then(res => {
//             setMapdata(res.data);
//             console.log(res.data.data[0]);
//           })
//           .catch(error => console.log(error));
    
          
//       }, []);
//     return(
//         <>
//           {
//             data && data.map((d)=>{
//                return(
//                 labels: [{d.priceUsd}, "Feb", "Mar", "Apr", "May", "Jun"],
//                 datasets: [
//                   {
//                     label: "First dataset",
//                     data: [33, 53, 85, 41, 44, 65],
//                     fill: true,
//                     backgroundColor: "rgba(75,192,192,0.2)",
//                     borderColor: "rgba(75,192,192,1)"
//                   },
//                 //   {
//                 //     label: "Second dataset",
//                 //     data: [33, 25, 35, 51, 54, 76],
//                 //     fill: false,
//                 //     borderColor: "#742774"
//                 //   }
//                 ]
//                )
//            })
//           }
//         </>
//     )
// }

// export default LineChart;