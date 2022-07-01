let getFoodRec = document.querySelector("#foodrecm")
let getActRec = document.querySelector("#activityrecm")

let food = ['Sun Shine Cafe! 20 South Orchard Dr. • North, Salt Lake, UT 84054 ', 'Nacho House! 15 S Highway 89, North Salt Lake, UT 84054']
let activity = ['Mountain biking at Wild Rose Park! got to 650 Sky Crest Ln, North Salt Lake, UT 84054 to reach the trailhead.', 'Golfing at Eagle Ridge Golf Course! go to 1110 E Eaglewood Drive North Salt Lake, UT 84054. Gear and carts are available for rent.']
function randomfood() {
    rannum = Math.floor(Math.random() * food.length)
    alert(food[rannum])
}

function randomact() {
    rannum = Math.floor(Math.random() * activity.length)
    alert(activity[rannum])
}

getFoodRec.addEventListener('click', randomfood)
getActRec.addEventListener('click', randomact)