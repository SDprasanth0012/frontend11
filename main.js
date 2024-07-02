console.log("hello world ")  


const daily = document.querySelector('#daily')
const weekly =document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')
// const workCur = document.querySelector('.work-cur')
// const workPrev = document.querySelector('.wrok-prev')
// const playCur = document.querySelector('.play-cur')
// const playPrev = document.querySelector('.play-prev')
// const exerciseCur = document.querySelector('.exercise-cur')
// const exercisePrev = document.querySelector('.exercise-prev')
// const studyCur = document.querySelector('.study-cur')
// const studyPrev = document.querySelector('.study-prev')
// const socialCur = document.querySelector('.social-cur')
// const socialPrev = document.querySelector('.social-prev')
// const selfCur = document.querySelector('.self-cur')
// const selfPrev = document.querySelector('.self-prev')
const current = document.querySelectorAll('.current')
const previous = document.querySelectorAll('.Previous')

// const data = fetch('./data.json')
//              .then((response)=>response.json())
//              .then(data=>console.log(data));

const handelDaily = async ()=>{
    const fetchPromise  = await fetch('./data.json')
    const data = await fetchPromise.json();
    current.forEach((cur, index)=>{
        // console.log(data[index].timeframes.daily.current)
        const x = data[index].timeframes.daily.current
        cur.textContent = `${x} hr`
    });
    previous.forEach((prev, index)=>{
        // console.log(data[index].timeframes.daily.previous)
        const x = data[index].timeframes.daily.previous
        prev.textContent = `previous - ${x} hrs`
    })
}
const handelWeekly = async ()=>{
    const fetchPromise  = await fetch('./data.json')
    const data = await fetchPromise.json();
    current.forEach((cur, index)=>{
        // console.log(data[index].timeframes.daily.current)
        const x = data[index].timeframes.weekly.current
        cur.textContent = `${x} hr`
    });
    previous.forEach((prev, index)=>{
        // console.log(data[index].timeframes.daily.previous)
        const x = data[index].timeframes.weekly.previous
        prev.textContent = `last week - ${x} hrs`
    })
}
const handelMonthly = async ()=>{
    const fetchPromise  = await fetch('./data.json')
    const data = await fetchPromise.json();
    current.forEach((cur, index)=>{
        // console.log(data[index].timeframes.daily.current)
        const x = data[index].timeframes.monthly.current
        cur.textContent = `${x}hrs`
    });
    previous.forEach((prev, index)=>{
        // console.log(data[index].timeframes.daily.previous)
        const x = data[index].timeframes.monthly.previous
        prev.textContent = `last month-${x} hrs`
    })
}

daily.addEventListener('click' ,handelDaily)
weekly.addEventListener('click' , handelWeekly)
monthly.addEventListener('click', handelMonthly)













// const getData = async()=>{
    
//     const fetchPromise = await fetch('/data.json')
//     console.log(fetchPromise);
//     const data = await fetchPromise.json();
//     console.log ("here is the data")
//     const title = data[0].timeframes.daily.current;
//     console.log(title);
// }
// getData();