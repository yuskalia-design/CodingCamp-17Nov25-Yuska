// Poin 4: Mengisi "Name" pada ucapan selamat datang
function setWelcomeName() {
    // Coba ambil nama dari penyimpanan lokal (agar tidak prompt setiap kali refresh)
    let userName = localStorage.getItem('user-name');
    
    if (!userName) {
        // Jika nama belum ada, minta input dari pengguna
        userName = prompt("Selamat datang! Masukkan Nama Anda:");
        if (userName) {
            localStorage.setItem('user-name', userName); // Simpan nama
        } else {
            userName = "Guest"; // Nama default jika dibatalkan
        }
    }
    
    // Tampilkan nama di elemen dengan id="user-name"
    const nameElement = document.getElementById('user-name');
    if (nameElement) {
        nameElement.textContent = userName;
    }
}

// Poin 5: Validasi Formulir dan Menampilkan Nilai Output
function validateAndShowOutput(event) {
    // Mencegah form submit default (reload halaman)
    event.preventDefault(); 

    // Ambil nilai dari input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;

    // VALIDASI (Pastikan Name, Email, Message tidak kosong)
    if (name === "") {
        alert("Nama wajib diisi.");
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Format email tidak valid.");
        isValid = false;
    }

    if (message === "") {
        alert("Pesan wajib diisi.");
        isValid = false;
    }

    if (!isValid) {
        return false; // Hentikan proses jika ada yang tidak valid
    }

    // Tampilkan nilai ke HTML (Summary Box - Poin 5)
    document.getElementById('output-name').textContent = name;
    document.getElementById('output-email').textContent = email;
    document.getElementById('output-message').textContent = message;
    
    alert(`Pesan dari ${name} berhasil dikirim!`);
    
    // Opsional: Reset form setelah berhasil submit
    // document.forms["messageForm"].reset(); 

    return false; // Pastikan form tidak reload halaman
}

// Panggil fungsi saat dokumen dimuat
document.addEventListener('DOMContentLoaded', setWelcomeName);