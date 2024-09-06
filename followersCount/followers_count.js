let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count number
}

function checkCountValue() {
    if (count === 10) {
        alert('Your Instagram post gained 10 followers! Congratulations!');
    } else if (count === 20) {
        alert('Your Instagram post gained 20 followers! Keep it up!');
    }
}

function reset() {
    count = 0;
    document.getElementById('countDisplay').innerHTML=count;
    alert('The follower count has been reset.'); 
}