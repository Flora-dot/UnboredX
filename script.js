const getActivityButton = document.getElementById('get-activity');
const activitycontainer = document.getElementById('container')
const headingText = document.getElementById('heading');



function toggleActivity() {
    if(activitycontainer.style.display === 'none') {
        activitycontainer.style.display = 'flex';
        headingText.style.display = 'none';

    } else {
        activitycontainer.style.display = 'none';
        headingText.style.display = 'block';
    }
}

function fetchApi() {
    fetch('https://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        if(data.link){
            activitycontainer.innerHTML = `<span class ='sixtyfour'>Activity:</span><a href = ${data.link}><span class='roboto animation'>${data.activity}</span> --- Click to Learn More</a>`

        }else{
            activity.innerHTML = `<span class ='sixtyfour'>Activity: </span><span class='roboto '>${data.activity}</span>`;
            type.innerHTML = `<span class ='sixtyfour'>Type: </span><span class='roboto'>${data.type}</span>`;
            participants.innerHTML = `<span class ='sixtyfour'>Participants: </span><span class='roboto'>${data.participants}</span>`;
            accessibility.innerHTML = `<span class ='sixtyfour'>Accessibilty: </span><span class='roboto'>${data.accessibility}</span>`;
        }
    });
}

function fetchActivity(){
    if(activitycontainer.style.display = 'flex'){
        activitycontainer.style.display = 'flex';
        headingText.style.display = 'none';

        fetchApi();

    } else{
        activitycontainer.style.display = 'none';
        headingText.style.display = 'block';
    }
}


 getActivityButton.addEventListener('click', toggleActivity,);
 getActivityButton.addEventListener('click', fetchActivity);

