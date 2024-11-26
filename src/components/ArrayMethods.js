import React, { useEffect, useRef } from 'react'


function ArrayMethods() {

  let resultRef=useRef();

    useEffect(()=>{
      resultRef.current.innerHTML="Players";
    },[]);


   
      let cricketTeamImages=[
        {name:"Virat Kohli", image:"./images/virat.png" },
        {name:"Rohit Sharma",image: "./images/rohit.png"},
        {name:"M.S.Dhoni",image:"./images/dhoniCSK.png"},
        {name:"Hardik Pandya",image:"./images/hardik.png"},
        {name:"Ravindra Jadeja",image:"./images/jadejaCSK.png"},
        {name:"Ishan Kishan",image:"./images/ishan.png"},
        {name:"Dinesh Karthik",image:"./images/dinesh.png"},
        {name:"Bumrah",image:"./images/bumrah.png"}
      ];
  
    let cricketTeams=["Virat","Rohit","Dhoni","Hardik","Jadeja","IshanKishan","Dinesh","Hardik","Bumrah"]
  
  
    return (
    <div>  
      <div className='arrayMethodsDiv'>
        <button className='arrayBtn' type='button' onClick={()=>{
            console.log(`Total : ${cricketTeams.length}`)
            for(let i=0;i<cricketTeams.length;i++){
                console.log(cricketTeams[i]);
            }
        }}>Length</button>
           
          
          
          <button className='arrayBtn' type='button' onClick={()=>{
              console.log(cricketTeams.at(5));
          }}>At</button>
          
          
          
            {/* toString and join is converting array to string and join has also customize the seperator */}
            <button className='arrayBtn' type='button' onClick={()=>{
              console.log(cricketTeams);
              console.log(cricketTeams.toString());
              console.log(cricketTeams.join(" ==> "));
            }}>To string/Join</button>
          

          
          {/* pop removing the element in last  */}
            <button className='arrayBtn' type='button' onClick={()=>{
              cricketTeams.pop();
              console.log(cricketTeams);
            }}>Pop</button>
          

          
          {/* push Adding the element in last  */}
            <button className='arrayBtn' type='button' onClick={()=>{
              cricketTeams.push("Siraj");
              console.log(cricketTeams)
            }}>push</button>
          

          
          {/* shift removing the element in first  */}
            <button className='arrayBtn' type='button' onClick={()=>{
              cricketTeams.shift();
              console.log(cricketTeams);
            }}>shift</button>
          

        
           {/* unshift adding the element in first  */}
            <button className='arrayBtn' type='button' onClick={()=>{
                cricketTeams.unshift("Ruturaj Gaikwad");
                console.log(cricketTeams);
            }}>unshift</button>
          

        
            {/* splice we can add or remove Inbetween or first or last */}
            <button className='arrayBtn' type='button' onClick={()=>{
              console.log(cricketTeams);
              cricketTeams.splice(2,3,"Shami","Axer");
              console.log(cricketTeams);
              cricketTeams.splice(cricketTeams-1,1);
              console.log(cricketTeams);
            }}>Splice</button>
          

        
            <button className='arrayBtn' type='button' onClick={()=>{
              let bahubaliCast=["Prabhas","Rana","Anushka","Thamanna"];
              let saripodhaShanivaramCast=["Nani","Priyanka Mohan","S.J.Surya","Abhirami"];
              let kaithiCast=["Karthi","Arjun das","Deepthi","George Maryan"];
              let moviesCast=bahubaliCast.concat(saripodhaShanivaramCast,kaithiCast);
              console.log(bahubaliCast);
              console.log(saripodhaShanivaramCast);
              console.log(kaithiCast)
              console.log(moviesCast);
              let moviesCast1=[...bahubaliCast,...saripodhaShanivaramCast,kaithiCast];
              console.log(moviesCast1);
            }}>Concat</button>
          
          </div>

{/* ============================================================================================= */}


          <h2>ArrayMethods2</h2>
            <div className='arrayMethods2'>
              
            
                <button type='button' onClick={()=>{
                  console.log(cricketTeams);
                  delete cricketTeams[4];
                  console.log(cricketTeams);
                }}>Delete</button>
              
                
              
              <button type='button' onClick={()=>{
                  let kauravaFamily=["Shanthanu","Wife1:Ganga","Wife2:Satyavathi",

                                    [["Vichitravirya",["Wife1:Amba",["Son:Dhritharashtra","Wife:Gandhari",["Son:Duryodhana","Son:Dushasana","Daughter:Duhsala","& 97others"]]],

                                    ["Wife2:Ambalika",["Son:Pandu","Wife1:Kunti",["Son1:Yudhistra","Son2:Bheema","Son3:Arjuna"],"Wife2:Madri",["Son1:Nakula","Son2:Sahadeva"]]]],

                                    "Bhishma"]]
                  console.log(kauravaFamily.flat());
                  }}>flat </button>
            

          
              <button type='button' onClick={()=>{
                console.log(cricketTeams);
                let arr=cricketTeams.slice(3,6);
                console.log(arr)
              }}>Slice</button>
            

          
              <button type='button' onClick={()=>{
                console.log(cricketTeams);
                let filledArr=cricketTeams.fill("Rishab Pant",3,4);
                console.log(filledArr);
              }}>Fill</button>
            

          
              <button type='button' onClick={()=>{
                let teamName="Indian Cricket Team";
                console.log(teamName);
                let arr=Array.from(teamName);
                console.log(arr)
              }}>From</button>
                  
              <button type='button' onClick={()=>{
                let result=cricketTeams.includes("Virat");
                console.log(result);
              }}>Includes</button>
          
              <button type='button' onClick={()=>{
                let result=cricketTeams.indexOf("Hardik");
                console.log(result);
              }}>IndexOf</button>
                    
              <button type='button' onClick={()=>{
                let result=cricketTeams.lastIndexOf("Hardik");
                console.log(result);
              }}>LastIndexOf</button>
            
          <button type='button' onClick={()=>{
              let IPLTeam=["Chennai Super Kings"];
              let teams=Array.isArray(IPLTeam);
              console.log(teams);
          }}>isArray</button> 
            
              <button type='button' onClick={()=>{
                let arr=cricketTeams.reverse();
                console.log(arr);
              }}>Reverse</button>
            
              <button type='button' onClick={()=>{
                let result=cricketTeams.sort();
                console.log(result);
                let numbers=[91,12,21,111,22,42,222,651,14,21,77];
                let orderResult=numbers.sort((a,b)=>a-b);
                console.log(orderResult);
              }}>Sort</button>
            
            </div>



              <h2>ArrayMethods3</h2>
              <div>
                  <div className='arrayMethod3'>

                  <div>
                    <button type='button' onClick={()=>{
                      let result=cricketTeams.forEach((ele,i)=>{
                        console.log(`${i}::${ele}`);
                      })
                      console.log(result);
                    }}>forEach</button>
                  </div>

                  <div>
                    <button type='button' onClick={()=>{
                      let marksArr=[99,89,89,89,67,77];
                      // if(marksArr[0] >= 35 &&
                      //   marksArr[1] >= 35 &&
                      //   marksArr[2] >= 35 &&
                      //   marksArr[3] >= 35 &&
                      //   marksArr[4] >= 35 &&
                      //   marksArr[5] >= 35 
                      // ){
                      //   console.log("Passed")
                      // }
                      // else{
                      //   console.log("Failed");
                      // }

                      let result=marksArr.every((ele)=>{
                        return ele >=35;
                      })
                      if(result==true){
                        console.log("Passed")
                      }
                      else{
                        console.log("Fail")
                      }
                      
                    }}>Every</button>
                  </div>

                  <div>
                    <button type='button' onClick={()=>{
                      let marksArr=[99,89,89,89,69,77];

                      let result=marksArr.some((ele)=>{
                        return ele<35;
                      })
                      if(result==true){
                        console.log("Failed")
                      }
                      else{
                        console.log("Passed");
                      }
                    }}>Some</button>
                  </div>

                  <div>
                    <button type='button' onClick={()=>{
                      let marksArr=[99,89,85,81,69,77,45,67,38,44,54,71];
                      console.log(marksArr);
                      
                      let filteredArr=marksArr.filter((ele,i)=>{
                        return ele <80;
                        })
                        let filteredArr2 = marksArr.filter((a,b)=>{
                          return a >80;
                      })

                      let filteredArr3=marksArr.filter((c,d)=>{
                        return c %2==0;
                      })

                      let filteredArr4=marksArr.filter((e,f)=>{
                        return e %2!=0;
                      })
                      console.log(`Below 80:${filteredArr}`);
                      console.log(`Above 80:${filteredArr2}`);
                      console.log(`Even no: ${filteredArr3}`)
                      console.log(`Odd no: ${filteredArr4}`);
                    }}>filter</button>
                  </div>

                  <div>
                    <button type='button' onClick={()=>{
                        let arr=[99,89,85,81,69,77,45,67,38,44,54,71];
                        let result=arr.find((ele,i)=>{
                          return ele>80;
                        })
                        console.log(result);
                    }}>Find</button>
                  </div>

                  <div>
                    <button type='button' onClick={()=>{
                      let arr=[99,89,85,81,69,77,45,67,38,44,54,71];
                      let result = arr.findIndex((ele,i)=>{
                        return ele <60;
                      })
                      console.log(result);
                    }}>Findindex</button>
                  </div>

                  <div>
                    <button type='button' onClick={()=>{
                      let arr=[99,89,85,81,69,77,45,67,38,44,54,71];
                      let result = arr.findLast((ele,i)=>{
                        return ele > 80;
                      })
                      console.log(result);
                    }}>Findlast</button>
                  </div>

                  <div>
                    <button type='button' onClick={()=>{
                      let arr=[99,89,85,81,69,77,45,67,38,44,54,71];
                      let result=arr.findLastIndex((ele,i)=>{
                        return ele <80;
                      })
                      console.log(result);
                    }}>Findlastindex</button>
                  </div>

                  <div>
                    <button type='button' onClick={()=>{
                        let arr=[99,89,85,81,69,77,45,67,38,44,54,71];
                        let Total=arr.reduce((tot,ele,i)=>{
                          return tot += ele;
                        })
                        console.log(Total);
                    }}>Reduce</button>
                  </div>

                  <div>
                    <button type='button' onClick={()=>{
                      let arr=["v","i","v","e","k"];
                      let name=arr.reduceRight((tot,ele,i)=>{
                        return tot += ele;
                      })

                      console.log(name);
                    }}>ReduceRight</button>
                  </div>

                  <div>
                    <button type='button' onClick={()=>{
                      let arr=cricketTeams.map((ele,i)=>{
                        return `Mr.${ele} sir`
                      })
                      console.log(arr);

                      let marks=[45,35,30,67,33,44];
                      console.log(marks);
                      let totalMarks=marks.map((ele,i)=>{
                        return ele +5;
                      })
                      console.log(totalMarks);
                    }}>Map</button>
                  </div>

                </div>
                <h1 ref={resultRef}></h1>
                  <div className='teamImages'>
                   
                    {cricketTeamImages.map((ele,i)=>{
                      return(
                        
                        <div>
                        <img className='imageClass' src={ele.image} alt={ele.name}></img>
                        <label className='playerLabel'>{ele.name}</label>
                        </div>
                       
                      )
                    })}
                  </div>
              </div>
    </div>
  )
}

export default ArrayMethods;
