function setWelcomeName() {
    // Meminta nama pengguna
    // Jika nama tidak ada di localStorage, prompt akan muncul.
    let userName = localStorage.getItem('user-name');
    
    if (!userName) {
        userName = prompt("Masukkan nama Anda untuk ucapan selamat datang:");
        // Simpan nama (opsional) agar tidak prompt lagi
        if (userName) {
            localStorage.setItem('user-name', userName);
        } else {
            // Jika pengguna membatalkan, gunakan nama default
            userName = "Pengunjung"; 
        }
    }
    
    // Mengisi 'Name' pada H1 (tag dengan id="user-name")
    const nameElement = document.getElementById('user-name');
    if (nameElement) {
        nameElement.textContent = userName;
    }
}

// Poin 5: Validasi Form "Message Us" & Tampilkan Nilai
function validateAndShowOutput(event) {
    // Mencegah form untuk reload halaman secara default
    event.preventDefault(); 

    // Mendapatkan elemen input
    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const phoneInput = document.getElementById('phone').value.trim();
    const messageInput = document.getElementById('message').value.trim();
    
    let isValid = true;
    let errorMessage = "";

    // 1. Validasi Name (tidak boleh kosong)
    if (nameInput === "") {
        errorMessage += "Nama wajib diisi.\n";
        isValid = false;
    }

    // 2. Validasi Email (format email dasar)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
        errorMessage += "Format email tidak valid.\n";
        isValid = false;
    }

    // 3. Validasi Message (tidak boleh kosong)
    if (messageInput === "") {
        errorMessage += "Pesan wajib diisi.\n";
        isValid = false;
    }

    // Jika validasi gagal, tampilkan pesan error
    if (!isValid) {
        alert("Peringatan Validasi:\n" + errorMessage);
        return false; // Menghentikan proses
    }

    // Jika validasi berhasil:
    
    // Poin 5: Tampilkan nilai pada HTML
    document.getElementById('output-name').textContent = nameInput;
    document.getElementById('output-email').textContent = emailInput;
    document.getElementById('output-message').textContent = messageInput;
    
    // Anda bisa tambahkan konfirmasi atau reset form di sini
    alert("Formulir berhasil dikirim!");
    // document.forms["messageForm"].reset(); 

    // Return false agar `onsubmit` di HTML tidak memicu reload
    return false; 
}

// Panggil fungsi setWelcomeName saat halaman dimuat
document.addEventListener('DOMContentLoaded', setWelcomeName);