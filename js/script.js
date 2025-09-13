// Menunggu hingga seluruh dokumen HTML dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    // --- Bagian 1: Menampilkan Nama Pengguna ---
    const displayNameElement = document.getElementById('display-name');
    
    // Meminta nama pengguna menggunakan prompt
    let userName = prompt("Hi, please enter your name:");
    
    // Jika pengguna tidak memasukkan nama, berikan nama default
    if (!userName) {
        userName = "Guest";
    }

    // Menampilkan nama di elemen yang telah ditentukan
    displayNameElement.textContent = userName;

    // --- Bagian 2: Menangani Pengiriman Form ---
    const messageForm = document.getElementById('message-form');
    
    messageForm.addEventListener('submit', function(event) {
        // Mencegah form dari perilaku default (reload halaman)
        event.preventDefault();

        // Mengambil nilai dari setiap input
        const name = document.getElementById('input-name').value;
        const dob = document.getElementById('input-dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('input-message').value;

        // Validasi: memastikan tidak ada field yang kosong
        if (name === "" || dob === "" || gender === "" || message === "") {
            alert("All fields are required! Please fill them out.");
            return; // Menghentikan eksekusi fungsi jika ada field kosong
        }

        // Menampilkan nilai yang di-submit ke bagian output
        document.getElementById('result-name').textContent = name;
        document.getElementById('result-dob').textContent = dob;
        document.getElementById('result-gender').textContent = gender;
        document.getElementById('result-message').textContent = message;

        // Mengosongkan form setelah submit
        messageForm.reset();
    });

    // --- Bagian 3: Menampilkan Waktu Saat Ini (Live) ---
    const currentTimeElement = document.getElementById('current-time');

    function updateTime() {
        const now = new Date();
        currentTimeElement.textContent = now.toLocaleString('id-ID');
    }
    
    // Memperbarui waktu setiap detik
    setInterval(updateTime, 1000);
    
    // Memanggil fungsi sekali saat halaman dimuat agar waktu langsung tampil
    updateTime(); 
});





