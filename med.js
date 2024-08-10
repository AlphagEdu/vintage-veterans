document.addEventListener('DOMContentLoaded', function() {
    const medicineList = [
        {
            name: 'Thyroix-50',
            time: '08:00',
            days: ['Monday', 'Wednesday', 'Friday']
        },
        {
            name: 'Vitamin-C Capsules',
            time: '12:00',
            days: ['Tuesday', 'Thursday']
        },
        {
            name: 'Calcium Pills',
            time: '18:00',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        }
    ];

    const medicineListContainer = document.querySelector('.medicine-list');
    const addMedicineForm = document.getElementById('addMedicineForm');

    function renderMedicineList() {
        medicineListContainer.innerHTML = '';
        medicineList.forEach(medicine => {
            const medicineItem = document.createElement('div');
            medicineItem.classList.add('medicine-item');
            
            const medicineName = document.createElement('h2');
            medicineName.textContent = medicine.name;
            medicineItem.appendChild(medicineName);
            
            const medicineTime = document.createElement('p');
            medicineTime.textContent = `Time: ${medicine.time}`;
            medicineItem.appendChild(medicineTime);
            
            const medicineDays = document.createElement('p');
            medicineDays.textContent = `Days: ${medicine.days.join(', ')}`;
            medicineItem.appendChild(medicineDays);

            medicineListContainer.appendChild(medicineItem);
        });
    }

    addMedicineForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const medicineName = document.getElementById('medicineName').value;
        const medicineTime = document.getElementById('medicineTime').value;
        const medicineDays = document.getElementById('medicineDays').value.split(',').map(day => day.trim());

        const newMedicine = {
            name: medicineName,
            time: medicineTime,
            days: medicineDays
        };

        medicineList.push(newMedicine);
        renderMedicineList();

        addMedicineForm.reset();
    });

    function checkMedicineTimes() {
        const now = new Date();
        const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
        const currentTime = now.toTimeString().substr(0, 5); // Get HH:MM format
        
        medicineList.forEach(medicine => {
            if (medicine.days.includes(currentDay) && medicine.time === currentTime) {
                alert(`Time to take your medicine: ${medicine.name}`);
            }
        });
    }

    // Check medicine times every minute
    setInterval(checkMedicineTimes, 60000);

    renderMedicineList();
});
