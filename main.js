// *********************************************************** //
// *** Time Tracking Dashboard | A Frontend Mentor Project *** //
// *********************************************************** //

// Get Timer Data from json file - default to daily data
async function fetchTimerData(period = 'daily') {
    try {
      const res = await fetch("./data.json");
      if (!res.ok) {
        throw new Error(res.status)
      }
      const data = await res.json();
      parseData(period, data)
    } catch (error) {
      console.error(error)
    } 
  }
  
  // Parse data before passing to render function
  function parseData(period, data) {
    if (period === 'daily') {
      const dailyData = data.map((item) => item.timeframes.daily);
      render('daily', dailyData)
    } else if (period === 'weekly') {
      const weeklyData = data.map((item) => item.timeframes.weekly); 
      render('weekly', weeklyData)
    } else {
      const monthlyData = data.map((item) => item.timeframes.monthly);
      render('monthly', monthlyData)
    }
  }
  
  // fetch data when page loads
  fetchTimerData()
  
  // Listen for clicks on period selectors
  document.getElementById('period-selectors').addEventListener('click', e => {
    if (e.target.id === 'daily' || e.target.id === 'weekly' || e.target.id === 'monthly') {
      fetchTimerData(e.target.id)
    }
  });
  
  // render dashboard data
  function render(period, data) {
    // select all the current-data classes
    const currentDataEls = Array.from(document.getElementsByClassName('current-data'));
    // populate current data elements with current data
    currentDataEls.forEach((el, i) => {
      data[i].current === 1 // check for hour values of 1
        ? el.textContent = `${data[i].current}hr` 
        : el.textContent = `${data[i].current}hrs`
    });
  
    // select all the previous-data classes
    const previousDataEls = Array.from(document.getElementsByClassName('previous-data'));
    // populate previous data elements with previous data
    previousDataEls.forEach((el, i) => {
      data[i].previous === 1 // check for hour values of 1
        ? el.textContent = `${data[i].previous}hr`
        : el.textContent = `${data[i].previous}hrs`
    });
  
    // Selected period styling - add/remove active selection class
    const selectors = document.getElementsByClassName('period-select');
    for (let selector of selectors) {
      selector.classList.remove('active');
    }
    document.getElementById(period).classList.add('active');
  }











// const getData = async()=>{
    
//     const fetchPromise = await fetch('/data.json')
//     console.log(fetchPromise);
//     const data = await fetchPromise.json();
//     console.log ("here is the data")
//     const title = data[0].timeframes.daily.current;
//     console.log(title);
// }
// getData();