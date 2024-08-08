document.addEventListener('DOMContentLoaded', function() {
    const medicineList = [
        {
            name: 'Medicine A',
            time: '08:00 AM',
            days: ['Monday', 'Wednesday', 'Friday']
        },
        {
            name: 'Medicine B',
            time: '12:00 PM',
            days: ['Tuesday', 'Thursday']
        },
        {
            name: 'Medicine C',
            time: '06:00 PM',
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
        const daysCheckboxes = document.querySelectorAll('input[name="days"]:checked');
        const medicineDays = Array.from(daysCheckboxes).map(checkbox => checkbox.value);

        const newMedicine = {
            name: medicineName,
            time: medicineTime,
            days: medicineDays
        };

        medicineList.push(newMedicine);
        renderMedicineList();

        addMedicineForm.reset();
    });

    renderMedicineList();
});
