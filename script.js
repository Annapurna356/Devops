const fareChart = {
  "Brodipet": {
    "Arundelpet": 30,
    "Lakshmipuram": 40,
    "Railpet": 35,
    "SVN Colony": 45
  },
  "Arundelpet": {
    "Brodipet": 30,
    "Lakshmipuram": 35,
    "Railpet": 25,
    "SVN Colony": 40
  },
  "Lakshmipuram": {
    "Brodipet": 40,
    "Arundelpet": 35,
    "Railpet": 45,
    "SVN Colony": 50
  },
  "Railpet": {
    "Brodipet": 35,
    "Arundelpet": 25,
    "Lakshmipuram": 45,
    "SVN Colony": 30
  },
  "SVN Colony": {
    "Brodipet": 45,
    "Arundelpet": 40,
    "Lakshmipuram": 50,
    "Railpet": 30
  }
};
function calculateFare() {
    const pickup = document.getElementById('pickup').value;
    const drop = document.getElementById('drop').value;
    const rideType = document.getElementById('rideType').value;
    const fareDisplay = document.getElementById('fare'); // This is still there, but not directly used for popup
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');

    // Reset popup message color for new calculations
    popupMessage.style.color = 'var(--text-color)'; // Use your defined text color

    if (!pickup || !drop || !rideType) {
        popupMessage.textContent = "Please select all options.";
        popupMessage.style.color = 'red'; // Set color for error messages
        popup.style.display = "flex";
        return;
    }

    if (pickup === drop) {
        popupMessage.textContent = "Pickup and drop-off locations cannot be the same.";
        popupMessage.style.color = 'orange'; // Set color for warning messages
        popup.style.display = "flex";
        return;
    }

    let baseFare = 50; // Base fare in rupees
    let distanceFactor = 10; // Per-location distance factor

    const locations = ["Brodipet", "Arundelpet", "Lakshmipuram", "Railpet", "SVN Colony"];
    const pickupIndex = locations.indexOf(pickup);
    const dropIndex = locations.indexOf(drop);

    let distanceFare = 0;
    if (pickupIndex !== -1 && dropIndex !== -1) {
        distanceFare = Math.abs(pickupIndex - dropIndex) * distanceFactor;
    }

    let totalFare = baseFare + distanceFare;

    switch (rideType) {
        case 'standard':
            break;
        case 'shared':
            totalFare *= 0.75;
            break;
        case 'luxury':
            totalFare *= 1.5;
            break;
    }

    // Add a success message prefix
    popupMessage.textContent = `Successfully Booked Your Ride! Estimated Fare: ₹${totalFare.toFixed(2)}`;
    popupMessage.style.color = 'var(--primary-color)'; // Set color for success messages
    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById('popup').style.display = "none";
}